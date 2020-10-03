/**
 * Created by cyb on 2019/8/16.
 */
import React from 'react';

const Todo = ({ onClick, completed, hide, text, name, }) => {
  if(hide) return null;
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {name + text}
    </li>
  )

}

export default Todo