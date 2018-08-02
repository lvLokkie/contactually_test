import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Home from 'Scenes/Home';

/**
 * @author Ryazanov I.A
 * Application routing
 */
@inject('homeStore')
@observer
export default class App extends Component {
  render() {
    return (
      <div className="layout">
        <Home />
      </div>
    );
  }
}

