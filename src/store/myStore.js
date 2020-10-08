import { createStore, applyMiddleware } from '../../utils/myRedux';
import todoAppReducers from '../reducers/reducer';
// import logger from 'redux-logger';

let store = createStore(todoAppReducers, applyMiddleware(logger, thunk));


function thunk ({dispatch, getState}){
  return next => action => {
    if(typeof action === 'function'){
      return action(dispatch, getState);
    }
    return next(action);
  }
} 

function logger({dispatch, getState}){
  return function (next){
    return function(action){
      console.log('prevState:', getState());
      console.log('action: ', action);
      let result = next(action);
      console.log('newState: ', getState());
      return result;
    }
  }
}
export default store; 