import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    ));
  };

  return (
    <Context.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </Context.Provider>
  );
}; 