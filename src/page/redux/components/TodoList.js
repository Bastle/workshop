/**
 * Created by cyb on 2019/8/16.
 */
import React from 'react';
import Todo from './Todo';
import { toggleTodo } from '../../../store/action/action';

const TodoList = ({ todos, name, dispatch}) => {
  function onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
  return (
    <ul>
      { todos.map((todo,index) => (
        <Todo key={index} onClick={() => {
          onTodoClick(index)}
        } name={name} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList;