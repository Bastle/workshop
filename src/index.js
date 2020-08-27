/**
 * Created by cyb on 2019/3/10.
 */

import './style/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducer';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import MouseTracker from './page/mouseTracker';
import Cat from './page/mouseTracker/Cat';
let store = createStore(todoApp);



ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <MouseTracker render={mouse => <Cat mouse={mouse} />} />
    </div>
  </Provider>,
  document.getElementById('root')
);