import { createStore, applyMiddleware } from '../../utils/myRedux';
import todoAppReducers from '../reducers/reducer';
// import logger from 'redux-logger';

let store = createStore(todoAppReducers, applyMiddleware(logger, thunk));

function logger({dispatch, getState}){
  return function (dispatch){
    return function(action){
      console.log('prevState:', getState());
      console.log('action: ', action);
      dispatch(action);
      console.log('newState: ', getState());
    }
  }
}
function thunk({dispatch, getState}){
  return dispatch => action => {
    if(typeof action === 'function'){
      return action(dispatch, getState);
    }
    return dispatch(action);
  }
}
export default store; 