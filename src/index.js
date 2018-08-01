import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import stores from './stores';
import App from './App';

// use strict
configure({ enforceActions: 'strict' });

/**
 * @author Ryazanov I.A
 * App root container
 */
const AppContainer = () => (
  <Provider {...stores}>
    <App />
  </Provider>
);

ReactDOM.render((<AppContainer />), document.getElementById('#app'));

