/**
 * Created by cyb on 2019/8/20.
 */
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../action/action';

let AddTodo = ({dispatch}) => {
  let input;

  return (
    <div>
      <form
        onSubmit={
          e => {
            e.preventDefault();
            dispatch(addTodo(input.value));
            input.value = '';
          }
        }
      >
        <input type="text" ref={node => {
          input = node
        }}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo = connect()(AddTodo);