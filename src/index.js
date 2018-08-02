import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import stores from './stores';
import App from './App';

// warn on mobx changes without actions
configure({ enforceActions: true });

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

