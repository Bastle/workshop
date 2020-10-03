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
  document.getElementById('root')
);