import React, { Component, createRef } from 'react';
import InputForm from './componentsFetch2/InputForm';
import Todos from './componentsFetch2/Todos';
import ErrorBoundary from './ErrorBoundary';

class AppfetchServer2 extends Component {
  state = {
    todos: []
    // input: ''
  };
  inputRef = createRef();
  // get todos
  async componentDidMount() {
    const res = await fetch('/todos');
    const data = await res.json();
    // throw new Error();
    this.setState({ todos: data });
  }

  // // get todo
  // onChange = e => {
  //   this.setState({ input: e.target.value });
  // };

  // add todo
  addTodo = async e => {
    // console.log(this.state.todos);
    e.preventDefault();
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({ todo: this.state.input })
      body: JSON.stringify({ todo: this.inputRef.current.value })
    };
    const res = await fetch('/todos', option);
    const data = await res.json();
    console.log(data);

    const newTodos = [...this.state.todos, data];
    // this.setState({ todos: newTodos, input: '' });
    this.setState({ todos: newTodos });
    this.inputRef.current.value = '';
  };
  // delete todo
  removeTodo = async id => {
    await fetch(`/todos/${id}`, {
      method: 'delete'
    });
    const newTodos = [...this.state.todos].filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <ErrorBoundary>
          <InputForm
            inputRef={this.inputRef}
            // input={input}
            // onChange={this.onChange}
            addTodo={this.addTodo}
          />

          <Todos todos={todos} removeTodo={this.removeTodo} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default AppfetchServer2;
