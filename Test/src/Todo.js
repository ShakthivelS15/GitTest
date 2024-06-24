import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, id: Date.now() }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    const deletedTodo = todos.find(todo => todo.id === id);
    setTodos(newTodos);
    setDeletedTodos([...deletedTodos, deletedTodo]);
  };

  const undoDelete = () => {
    if (deletedTodos.length > 0) {
      const lastDeleted = deletedTodos.pop();
      setTodos([...todos, lastDeleted]);
      setDeletedTodos([...deletedTodos]);
    }
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditValue(text);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: editValue };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditId(null);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={undoDelete}>Undo Delete</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleEditSubmit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                {todo.text}{' '}
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>{' '}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
