/**
 * Created by cyb on 2019/8/19.
 */
import { combineReducers } from "redux";
import {
  VisibilityFilters,
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
} from "../action/action";

const { SHOW_ALL } = VisibilityFilters;

interface TodoItem {
  text: string;
  completed: boolean;
}

interface ActionType {
  type: string;
  text?: string;
  index?: number;
  filter?: string;
  preload?: { name: string };
}

function todos(state: TodoItem[] = [], action: ActionType) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilter(state: string = SHOW_ALL, action: ActionType) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
const initialLogin: { isLogin: Boolean; userName: String | null } = {
  isLogin: false,
  userName: null,
};
function loginReducer(state = initialLogin, action: ActionType) {
  switch (action.type) {
    case "GET_USER_INFO":
      return Object.assign({}, state, { isLogin: false, name: null });
    case "LOGIN_SUCCESS":
      return Object.assign({}, state, {
        isLogin: true,
        name: action.preload.name,
      });
    case "LOGIN_FAILED":
      return Object.assign({}, state, { isLogin: false });
    case "LOGOUT":
      return Object.assign({}, state, { isLogin: false, name: null });
    default:
      return state;
  }
}

function count(state: number = 0, action: ActionType) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

const todoAppReducers = combineReducers({
  visibilityFilter,
  todos,
  user: loginReducer,
  count,
});

export default todoAppReducers;
export type RootState = ReturnType<typeof todoAppReducers>;
