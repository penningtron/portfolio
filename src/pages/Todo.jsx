// src/TodoApp.jsx
import React, { useState, useEffect } from 'react';
import supabase from './supabaseClient';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Fetch todos when the component mounts
  useEffect(() => {
    const loadTodos = async () => {
      const { data, error } = await supabase.from('todos').select('*');
      if (error) {
        console.error('Error fetching todos:', error);
      } else {
        setTodos(data || []);
      }
    };
    loadTodos();
  }, []);

  // Handle adding a new todo
  const handleAddTodo = async () => {
    if (newTodo) {
      const { data, error } = await supabase
        .from('todos')
        .insert([{ title: newTodo, completed: false }]);

      if (error) {
        console.error('Error adding todo:', error);
      } else {
        setTodos((prevTodos) => [...prevTodos, ...data]);
        setNewTodo('');
      }
    }
  };

  // Handle toggling the todo completion
  const handleToggleCompletion = async (id, completed) => {
    const { data, error } = await supabase
      .from('todos')
      .update({ completed: !completed })
      .eq('id', id);

    if (error) {
      console.error('Error updating todo:', error);
    } else {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !completed } : todo
        )
      );
    }
  };

  // Handle deleting a todo
  const handleDeleteTodo = async (id) => {
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting todo:', error);
    } else {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleCompletion(todo.id, todo.completed)}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
