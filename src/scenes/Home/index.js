import React, { Component } from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Map, YMaps } from 'react-yandex-maps';

import './styles.less';
import Dot from './models/Dot';
import List from './components/List';

// map content
import PlaceMarks from './components/Map/PlaceMarks';
import Route from './components/Map/Route';


/**
 * Home page component
 * @author Ryazanov I.A
 * @type {Component}
 */
@inject('homeStore')
@observer
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.homeStore;
    this.mapRef = React.createRef();
  }
  /**
   * On key press in input
   * @param {KeyboardEvent} ev
   */
  onCaptionKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      if (ev) ev.preventDefault();
      const { store } = this;
      const dot = new Dot(this.dotName, this.centerCoordinates);
      store.addDot(dot);
      store.setMapCenter(this.centerCoordinates);
    }
  };

  /**
   * On key press in input
   * @param {Event} ev
   */
  onCaptionChange = (ev) => {
    const { store } = this;
    const inputValue = ev.target.value;
    store.setCaption(inputValue);
  };

  /**
   * On list item delete
   * @param {Number} posIndex
   */
  onItemDelete = (posIndex) => {
    const { store } = this;
    store.deleteDot(posIndex);
  };

  /**
   * On list item drag end event handler
   * @param {Object} ev
   */
  onItemDragEnd = (ev) => {
    const { store } = this;
    store.moveDot(ev.oldIndex, ev.newIndex);
  };

  /**
   * Dot drag end handler
   * @param {Event} ev of Ya maps
   * @param {Number} pos
   * @see https://tech.yandex.ru/maps/doc/archive/jsapi/2.0/ref/reference/Event-docpage/#method_detail__get-param-name
   */
  onPlaceMarkDragEnd = (ev, pos) => {
    const { store } = this;
    const { geometry } = ev.originalEvent.target;
    const coordinates = geometry.getCoordinates();
    store.changePlaceMarkCoordinates(pos, coordinates);
  };

  /**
   * Dot name from input
   * @returns {String}
   */
  @computed get dotName() {
    const { inputVal } = this.store;
    return inputVal;
  }

  /**
   * Dot name from input
   * @returns {Dot[]}
   */
  @computed get items() {
    const { items } = this.store;
    return items;
  }

  /**
   * Ya maps center`s centerCoordinates
   * @returns {Number[]}
   */
  @computed get centerCoordinates() {
    const instance = this.mapInstance;
    return instance.getCenter();
  }

  /**
   * Get Yandex map instance
   * @returns {Object}
   */
  @computed get mapInstance() {
    return this.mapRef.current.state.instance;
  }

  /**
   * Render component method
   */
  render() {
    return (
      <div className="home__container">
        <div className="home__map">
          <YMaps>
            <Map
              state={{ center: this.store.centerCoordinates, zoom: 10 }}
              width={630}
              height={315}
              ref={this.mapRef}
            >
              <PlaceMarks items={this.items} onPlaceMarkDragEnd={this.onPlaceMarkDragEnd} />
              <Route coordinates={this.items.map(el => el.coordinatesAsArray)} />
            </Map>
          </YMaps>
        </div>
        <div className="home__navigation">
          <input
            className="home__input"
            type="text"
            tabIndex={0}
            title="Add new placemark..."
            placeholder="Add new placemark..."
            value={this.dotName}
            onKeyPress={this.onCaptionKeyPress}
            onChange={this.onCaptionChange}
          />
          <List
            className="home__list-container"
            items={this.items}
            onSortEnd={this.onItemDragEnd}
            onItemDelete={this.onItemDelete}
          />
        </div>
      </div>
    );
  }
}

