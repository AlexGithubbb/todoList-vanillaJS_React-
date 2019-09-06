import React, { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TodoItems from './components/Todos';

class App extends Component {
  state = {
    input: '',
    todos: []
  };

  getInput = e => {
    const newInput = e.target.value;
    this.setState({ [e.target.name]: newInput });
  };

  addTodo = e => {
    e.preventDefault();
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
    // this.setState(() => {
    //   const todos = this.state.todos.filter((todo, i) => i !== id);
    //   return { todos };
    // });
    const updatedTodos = [...this.state.todos];
    updatedTodos.splice(id, 1);
    this.setState({ todos: updatedTodos });
  };

  render() {
    // console.log(this.state.todos);
    return (
      <div className='App'>
        <InputForm
          // inputRef={this.inputRef}
          addTodo={this.addTodo}
          getInput={this.getInput}
          input={this.state.input}
        />
        <TodoItems removeTodo={this.removeTodo} todos={this.state.todos} />
        <FlavorForm />
      </div>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value !== '') {
      alert('Your favorite flavor is: ' + this.state.value);
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option default></option>
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
        </label>
        <input type='submit' value='submit' />
      </form>
    );
  }
}

export default App;
