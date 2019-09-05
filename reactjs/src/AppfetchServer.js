import React, { Component, createRef } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class AppfetchServer extends Component {
  state = {
    todos: []
    // input: ''
  };
  // use refs instead of state input
  inputRef = createRef();

  async componentDidMount() {
    const res = await fetch('/todos');
    const data = await res.json();
    this.setState({ todos: data });
  }

  // don't need onChange anymore, we use refs
  // onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  onSubmit = async e => {
    e.preventDefault();
    // post this input value to server
    const options = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ single: this.state.input })
      body: JSON.stringify({ single: this.inputRef.current.value })
    };
    const res = await fetch('/todos', options);
    const data = await res.json();
    const newTodos = [...this.state.todos, data];
    // this.setState({ todos: newTodos, input: '' });
    this.setState({ todos: newTodos });
    this.inputRef.current.value = null;
  };

  deleteTodo = async id => {
    await fetch(`/todos/${id}`, {
      method: 'delete'
    });
    const newTodos = [...this.state.todos].filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  };

  render() {
    // console.log('[Render...]', this.state.todos);
    const { todos } = this.state;
    return (
      <div className='App'>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            ref={this.inputRef}
            type='text'
            name='input'
            // value={input}
            // onChange={this.onChange}
          />
        </form>
        <ul>
          {todos.map((todo, i) => (
            <TodoItem
              key={i}
              id={todo.id}
              todo={todo.single}
              removeTodo={this.deleteTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default AppfetchServer;
