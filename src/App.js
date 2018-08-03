import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Home from 'Scenes/Home';

/**
 * @author Ryazanov I.A
 * Application routing
 */
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

