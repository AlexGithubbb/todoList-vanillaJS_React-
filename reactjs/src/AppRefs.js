import React, { Component, createRef } from 'react';
import InputForm from './components2/InputForm';
import Todos from './components2/Todos';

class Apptest extends Component {
  state = {
    todos: []
  };
  inputRef = createRef('');

  // add todo
  addTodo = e => {
    e.preventDefault();
    // const newTodo = [...this.state.todos, this.inputRef.current.value];
    const newTodo = [...this.state.todos];
    newTodo.push(this.inputRef.current.value);
    this.setState({ todos: newTodo });
    this.inputRef.current.value = '';
  };
  // delete todo
  removeTodo = id => {
    // filter out the corresponding todo item
    // const newTodo = [...this.state.todos].filter((todo, i) => i !== id);
    const newTodo = this.state.todos
      .slice(0, id)
      .concat(this.state.todos.slice(id + 1));
    this.setState({ todos: newTodo });
  };

  render() {
    return (
      <div>
        <InputForm addTodo={this.addTodo} inputRef={this.inputRef} />
        <Todos removeTodo={this.removeTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default Apptest;
