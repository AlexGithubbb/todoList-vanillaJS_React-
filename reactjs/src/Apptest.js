import React, { Component } from 'react';
import InputForm from './components2/InputForm';
import Todos from './components2/Todos';

class Apptest extends Component {
  state = {
    todos: []
    // input: ''
  };

  // input todo
  onChange = e => {
    this.setState({ input: e.target.value });
  };
  // add todo
  addTodo = e => {
    e.preventDefault();
    const newTodo = [...this.state.todos, this.state.input];
    this.setState({ todos: newTodo, input: '' });
  };
  // delete todo
  removeTodo = id => {
    console.log(id);

    // filter out the corresponding todo item
    // const newTodo = [...this.state.todos].filter((todo, i) => i !== id);
    const newTodo = this.state.todos
      .slice(0, id)
      .concat(this.state.todos.slice(id + 1));
    this.setState({ todos: newTodo });
    console.log(this.state.todos);
  };

  render() {
    return (
      <div>
        <InputForm
          addTodo={this.addTodo}
          input={this.state.input}
          onChange={this.onChange}
        />
        <Todos removeTodo={this.removeTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default Apptest;
