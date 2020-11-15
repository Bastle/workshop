/**
 * Created by cyb on 2019/3/10.
 */

import './style/index.less';
import { Provider } from 'react-redux';
import store from './store';
// import { Provider } from '../utils/myReactRedux';
// import store from './store/myStore';
import ReactDOM from 'react-dom';
import React from 'react';
import AddNum from './page/addNum';
import ReduxApp from './page/redux';
import PrivateRoute from './router/privateRoute'
import ContextApp from './page/context';
import Login from './page/loginPage';
import Cart from './page/cart';
import { 
  BrowserRouter, 
  HashRouter, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';

const App = props => {
  return (
    <Provider store={store}>
      {/* <HashRouter>
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
      </HashRouter> */}
      <BrowserRouter>
        <Link to='/'>
            <button>切换到 context</button>
          </Link>
          <Link to='/redux'>
            <button>切换到 redux</button>
          </Link>
          <Link to='/search'>
            <button>切换到 addNum</button>
          </Link>
          <Link to='/cart'>
            <button>切换到 cart</button>
          </Link>
        <Switch>
          <Route exact path="/" component={ContextApp} />
          <Route exact path="/redux" component={ReduxApp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <PrivateRoute path="/search" component={AddNum}/>
          {/* <Route exact path="/search/:id" component={AddNum} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);