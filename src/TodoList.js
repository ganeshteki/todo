import React from 'react';
import TodoItem from './TodoItem';


function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </div>
  );
}

export default TodoList;