import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            text={todo.text} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;