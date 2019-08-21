/**
 * Created by cyb on 2019/8/16.
 */
import React from 'react';

const Todo = ({ onClick, completed, text}) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  )

}

export default Todo