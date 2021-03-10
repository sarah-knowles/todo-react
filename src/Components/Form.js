import React from 'react';

const Form = ({ setInputText, inputText, todos, setTodos, setFilter }) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText('');
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
  }

  return (
    <form>
      <input value={inputText}
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button onClick={submitTodoHandler}
        className='todo-button'
        type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={filterHandler} name='todos' className='filter-todo'>
          <option className='select-text'value='all'>all</option>
          <option className='select-text'value='completed'>completed</option>
          <option className='select-text'value='incomplete'>incomplete</option>
        </select>
      </div>
    </form>
  );
}

export default Form;