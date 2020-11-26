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
import route from './router';
import config from './router/config';
import { 
  BrowserRouter, 
  Switch, 
  Link 
} from 'react-router-dom';

console.log('config: ', config);


const App = props => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          {
            config.map(({path, title}) => (
              title && <Link key={path} to={path}>
                        {title}
                      </Link>
            ))
          }
        <Switch>
          {route}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

