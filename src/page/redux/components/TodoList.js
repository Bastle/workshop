/**
 * Created by cyb on 2019/8/16.
 */
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick}) => {
  return (
    <ul>
      { todos.map((todo,index) => (
        <Todo key={index} onClick={() => onTodoClick(index)} {...todo} />
      ))}
    </ul>
  )
}


export default TodoList;