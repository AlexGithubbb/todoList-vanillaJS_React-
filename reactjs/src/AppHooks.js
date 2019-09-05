import React, { useRef, useState } from 'react';
import './App.css';
import InputForm from './components/InputForm2';
import TodoItems from './components/TodoItems';

const App = () => {
  const [todos, setTodos] = useState([]);
  const text = useRef('');

  const addTodo = e => {
    e.preventDefault();
    // console.log('submited');
    if (text.current.value !== '') {
      const newTodos = [...todos];
      newTodos.push(text.current.value);
      setTodos(newTodos);
      text.current.value = null;
    }
  };

  const removeTodo = id => {
    setTodos(() => todos.filter((todo, i) => i !== id));
  };

  return (
    <div className='App'>
      <InputForm inputRef={text} addTodo={addTodo} />
      <TodoItems removeTodo={removeTodo} todos={todos} />
    </div>
  );
};

export default App;
