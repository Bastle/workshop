/**
 * Created by cyb on 2019/8/19.
 */
import { combineReducers } from 'redux';
import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../action/action';

const { SHOW_ALL } = VisibilityFilters;

function todos(state = [], action){
  switch(action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if(index === action.index){
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo;
      })
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
}
const initialLogin = {
  isLogin: false,
  userName: null
}
function loginReducer(state = initialLogin, action){
  switch (action.type) {
    case 'GET_USER_INFO':
      return Object.assign({}, state, {isLogin: false, name: null});
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {isLogin: true, name: action.preload.name});
    case 'LOGIN_FAILED': 
      return Object.assign({}, state, {isLogin: false});
    default:
      return state;
  }
}


const todoAppReducers = combineReducers({
  visibilityFilter,
  todos,
  user: loginReducer
})

export default todoAppReducers;