/**
 * Created by cyb on 2019/3/10.
 */

import './style/index.css';
import { Provider } from 'react-redux';
// import store from './store';
import { Provider } from '../utils/myReactRedux';
import store from './store/myStore';
import ReactDOM from 'react-dom';
import React from 'react';
<<<<<<< HEAD
import ReduxApp from './page/redux';
import ContextApp from './page/context';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

const App = props => {
  console.log(this.state.type);
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="button-list">
          <Link to='/'>
            <button>切换到context</button>
          </Link>
          <Link to='/redux'>
            <button>切换到redux</button>
          </Link>
        </div>
        <Route exact path="/" component={ContextApp} />
        <Route exact path="/redux" component={ReduxApp} />
      </HashRouter>
    </Provider>
  )
}

ReactDOM.render(
  <App />,
=======
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
>>>>>>> 5b8405aacba9078af3aef20010012e2529f71bcb
  document.getElementById('root')
);