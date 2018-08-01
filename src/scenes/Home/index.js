import React, { Component } from 'react';
import { computed } from 'mobx';
import { observer, inject } from 'mobx-react';
import { YMaps, Map } from 'react-yandex-maps';

import Dot from './service/Dot';
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

    // bind handlers
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDotDragEnd = this.onDotDragEnd.bind(this);
  }
  /**
   * On key press in input
   * @param {KeyboardEvent} ev
   */
  onKeyPressHandler(ev) {
    if (ev.key === 'Enter') {
      if (ev) ev.preventDefault();
      const { store } = this;
      const dot = new Dot(this.dotName, this.centerCoordinates);
      store.addDot(dot);
    }
  }

  /**
   * On key press in input
   * @param {Event} ev
   */
  onChange(ev) {
    const { store } = this;
    const inputValue = ev.target.value;
    store.setCaption(inputValue);
  }

  /**
   * On list item delete
   * @param {Number} posIndex
   */
  onDelete(posIndex) {
    const { store } = this;
    store.deleteDot(posIndex);
  }

  /**
   * On list item drag end event handler
   * @param {Object} ev
   */
  onDragEnd(ev) {
    const { store } = this;
    store.moveDot(ev.oldIndex, ev.newIndex);
  }

  /**
   * Dot drug end handler
   * @param {Event} ev of Ya maps
   * @param {Number} pos
   * @see https://tech.yandex.ru/maps/doc/archive/jsapi/2.0/ref/reference/Event-docpage/#method_detail__get-param-name
   */
  onDotDragEnd(ev, pos) {
    const { store } = this;
    const { geometry } = ev.originalEvent.target;
    const coordinates = geometry.getCoordinates();
    store.changeCoordinates(pos, coordinates);
  }

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
    // FIXME: make it simple
    const { instance } = this.mapRef.current.state;
    return instance.getCenter();
  }

  /**
   * Render component method
   * FIXME: save center after dot adding, now it is static Moscow
   */
  render() {
    return (
      <div className="home__container">
        <div className="home__navigation">
          <input
            className="home__input"
            type="text"
            value={this.dotName}
            onKeyPress={this.onKeyPressHandler}
            onChange={this.onChange}
          />
          <List
            className="home__list-container"
            items={this.items}
            onSortEnd={this.onDragEnd}
            onDelete={this.onDelete}
          />
        </div>
        <div className="home__map">
          <YMaps>
            <Map state={{ center: [55.76, 37.64], zoom: 10 }} ref={this.mapRef}>
              <PlaceMarks items={this.items} onDotDragEnd={this.onDotDragEnd} />
              <Route coordinates={this.items.map(el => el.coordinates)} />
            </Map>
          </YMaps>
        </div>
      </div>
    );
  }
}

