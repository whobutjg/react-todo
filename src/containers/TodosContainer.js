import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import TodoList from '../components/TodoList';
import CreateToDoForm from '../components/CreateToDoForm';

class TodosContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  };

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    TodoModel.all().then((res) => {
      this.setState ({
        todos: res.data.todos,
      });
    });
  };

  createTodo = (todo) => {
    let newTodo = {
      body: todo,
      completed: false,
    };

    TodoModel.create(newTodo).then((res) => {
      let todos = this.state.todos;
      todos.push(res.data);
      this.setState({ todos: todos });
    });
  }

  deleteTodo = (todo) => {
    TodoModel.delete(todo).then((res) => {
      let todos = this.state.todos.filter((todo) => {
        return todo._id !== res.data._id;
      });
      this.setState({todos});
    });
  }

  updateTodo = todo => {
    const isUpdatedTodo = t => {
      return t._id === todo._id;
    };
    TodoModel.update(todo)
    .then((res) => {
      let todos = this.state.todos;
      todos.find(isUpdatedTodo).body = todo.body;
      this.setState({ todos: todos });
    });
  }



  render() {
    TodoModel.all().then((res) => {
      console.log(res);
    });
    return (
      <div className="todosComponent">
        <CreateToDoForm createTodo={this.createTodo}/>
        <TodoList 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo} 
          updateTodo={ this.updateTodo }/>
      </div>
    );
  };
};

export default TodosContainer;

