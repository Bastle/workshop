/**
 * Created by cyb on 2019/8/16.
 */

import React from 'react';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';


const ReduxApp = () => {
  return (
    <div>
      <AddTodo/>
      <VisibleTodoList name="my todo list"/>
      <Footer/>
    </div>
  )
}

export default ReduxApp;