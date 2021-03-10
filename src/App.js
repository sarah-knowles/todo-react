import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import './index.css';

function App() {

  const [inputText, setInputText] = useState(''); 
  const [todos, setTodos] = useState([]);
  const [status, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocally()
  },[])


  useEffect(() => {
    filterHandler();
    saveLocally();
  }, [todos, status])


  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false))  
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocally = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocally = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
     let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };
 
  return (
    <div className="App">
      <header>
        <h1>Sarah's To Do List</h1>
      </header>

      <Form
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setFilter={setFilter}
      filteredTodos={filteredTodos}
      />

      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
