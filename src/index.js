/**
 * Created by cyb on 2019/3/10.
 */

import './style/index.less';
import { Provider } from 'react-redux';
import store from './store';
// import { Provider } from './utils/myReactRedux';
// import store from './store/myStore';
import ReactDOM from 'react-dom';
import React from 'react';
import AddNum from './page/addNum';
import ReduxApp from './page/redux';
import PrivateRoute from './router/privateRoute'
import ContextApp from './page/context';
import Login from './page/loginPage';
import Cart from './page/cart';
import Fp from './page/fp';
// import Hooks from './page/hooks';
import { 
  BrowserRouter, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';

import(/*webpackChunkName: "ramda" */'ramda').then(_ => {
  console.log('-------------- _ --------->', _);
  const add = _.curry((x, y) => x + y);
  console.log('---------- add(1)(2) ---------> ', add(1)(2));
})

const getHooks = (location,cb) => {
  console.log(1111111111111)
  import(/*webpackChunkName: "hooks" */'./page/hooks').then(res => {
    console.log('res: ', res)
    cb(null, res);
  });
}

const App = props => {
  return (
    <Provider store={store}>
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
          <Link to='/fp'>
            <button>切换到 fp</button>
          </Link>
          <Link to='/hooks'>
            <button>切换到 hooks</button>
          </Link>
        <Switch>
          <Route exact path="/" component={ContextApp} />
          <Route exact path="/redux" component={ReduxApp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/fp" component={Fp} />
          <Route exact path="/hooks" getComponent={getHooks} />
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

