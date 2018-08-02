import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Placemark } from 'react-yandex-maps';
import uniqueKey from 'unique-key';

/**
 * PlaceMarks collection
 * @author Ryazanov I.A.
 */
@observer
export default class PlaceMarks extends Component {
  render() {
    return (
      this.props.items.map((item, index) => (
        <Placemark
          key={uniqueKey(16, index)}
          onDragEnd={(ev) => { this.props.onPlaceMarkDragEnd(ev, index); }}
          geometry={{
            coordinates: item.coordinatesAsArray,
          }}
          properties={{
            hintContent: item.name,
            balloonContent: item.caption,
          }}
          options={{
            iconImageSize: [30, 42], // default values from docs
            iconImageOffset: [-3, -42],
            draggable: true,
          }}
        />
      ))
    );
  }
}
