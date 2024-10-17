import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './redux/actions';
import './TodoItem.css';

function TodoItem({ todo, index }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className="todo-item">
      <span>{todo}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;