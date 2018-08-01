import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Polyline } from 'react-yandex-maps';

/**
 * Yandex map`s polyline for route display
 * @author Ryazanov I.A
 */
@observer
export default class Route extends Component {
  render() {
    return (
      <Polyline
        geometry={{
          // Specifying the coordinates of the vertices of the polyline.
          coordinates: this.props.coordinates,
        }}
        // Setting options for the geo object.
        options={{
          // Disabling the close button on a balloon.
          balloonCloseButton: false,
          // The line color.
          strokeColor: '#ff7567',
          // Line width.
          strokeWidth: 4,
          // The transparency coefficient.
          strokeOpacity: 0.5,
        }}
      />
    );
  }
}
