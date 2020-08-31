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
import AddNum from './page/addNum';
import Example from './page/example';
let store = createStore(todoApp);



ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      {/* <MouseTracker render={mouse => <Cat mouse={mouse} />} /> */}
      <AddNum />
      <Example />
    </div>
  </Provider>,
  document.getElementById('root')
);