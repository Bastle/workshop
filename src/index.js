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
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './action/action';


// class Main extends React.Component {
//   render(){
//     return (<div>{123}</div>)
//   }
// }
// const Main = () => (<div>{123}</div>);


let store = createStore(todoApp);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);