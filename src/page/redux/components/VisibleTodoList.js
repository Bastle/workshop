/**
 * Created by cyb on 2019/8/16.
 */
import { connect } from 'react-redux';
import { toggleTodo, TOGGLE_TODO } from '../../../store/action/action';
import TodoList from './TodoList';



function getTodos(todos, filter){
  switch (filter){
    case 'SHOW_ALL':
      return todos.map(t => {
        t.hide = false;
        return t;
      });
    case 'SHOW_ACTIVE':
      return todos.map(t => {
        t.hide = t.completed;
        return t;
      });
    case 'SHOW_COMPLETED':
      return todos.map(t => {
        t.hide = !t.completed;
        return t;
      });
  }
}

const mapStateToProps = (state, ownProps) =>{
  return Object.assign({}, ownProps, {
   todos: getTodos(state.todos, state.visibilityFilter, ownProps.name),
  })
}

const mapDispatchToProps = dispatch => {
 return {
   onTodoClick: id => {
     setTimeout(() => {
      dispatch(toggleTodo(id))
     }, 1000)
   }
 }
}
// const mapDispatchToProps = {
//   onTodoClick: id => dispatch => {
//     setTimeout(() => {
//       dispatch(toggleTodo(id));
//     }, 1000)
//   }
// }

const VisibleTodoList = connect(
  mapStateToProps,
  // mapDispatchToProps,
  // {
  //   onTodoClick: id => toggleTodo(id)
  // }
)(TodoList);

export default VisibleTodoList;