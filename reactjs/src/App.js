import React, { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TodoItems from './components/TodoItems';

class App extends Component {
  state = {
    input: '',
    todos: []
  };

  getInput = e => {
    // console.log(e.target.value);
    const newInput = e.target.value;
    this.setState({ input: newInput });
  };

  addTodo = e => {
    e.preventDefault();
    // console.log('submited');
    if (this.state.input !== '') {
      const newTodos = [...this.state.todos];
      newTodos.push(this.state.input);
      this.setState({ todos: newTodos, input: '' });
    }
  };

  removeTodo = id => {
    // console.log(id);
    // const updatedTodos = this.state.todos.filter((todo, i) => i !== id);
    // update state with filter
    // this.setState({ todos: updatedTodos });
    this.setState(() => {
      const todos = this.state.todos.filter((todo, i) => i !== id);
      return { todos };
    });
    // const updatedTodos = [...this.state.todos];
    // updatedTodos.splice(id, 1);
    // this.setState({ todos: updatedTodos });
  };

  render() {
    // console.log(this.state.todos);

    return (
      <div className='App'>
        <InputForm
          addTodo={this.addTodo}
          getInput={this.getInput}
          input={this.state.input}
        />
        <TodoItems removeTodo={this.removeTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
