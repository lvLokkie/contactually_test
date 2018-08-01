import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { observer, inject } from 'mobx-react';
import Home from 'Scenes/Home';

/**
 * @author Ryazanov I.A
 * Application routing
 * FIXME: remove devtools on prod
 */
@inject('homeStore')
@observer
export default class App extends Component {
  render() {
    return (
      <div className="layout">
        <Home />
        <DevTools />
      </div>
    );
  }
}

