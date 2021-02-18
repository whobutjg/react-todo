import React from 'react';
import TodoCard from './TodoCard';

const TodoList = (props) => {
  let todos = props.todos.map((todo) => {
    return (
      <TodoCard 
        key={todo._id} 
        todo={todo} 
        deleteTodo={props.deleteTodo} 
        updateTodo={ props.updateTodo }/>
    );
  });
    return (
    <ul>
      {todos}
    </ul>
  );
};

export default TodoList;