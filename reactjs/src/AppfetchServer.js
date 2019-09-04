import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class AppfetchServer extends Component {
  state = {
    todos: [],
    input: ''
  };
  // inputRef = createRef();

  async componentDidMount() {
    const res = await fetch('/todos');
    const data = await res.json();
    console.log('[getTodo..]', data);
    this.setState({ todos: data });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    // post this input value to server
    const options = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ single: this.state.input })
    };
    const res = await fetch('/todos', options);
    const data = await res.json();
    const newTodos = [...this.state.todos, data];
    console.log('[postTodos..]', newTodos);
    this.setState({ todos: newTodos, input: '' });
  };

  deleteTodo = async id => {
    await fetch(`/todos/${id}`, {
      method: 'delete'
    });
    // console.log(data);
    const newTodos = [...this.state.todos].filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
    console.log('[deleteTodos]', newTodos);
  };

  render() {
    console.log('[Render...]', this.state.todos);
    const { todos, input } = this.state;
    return (
      <div className='App'>
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
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type='text'
            name='input'
            value={input}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default AppfetchServer;
