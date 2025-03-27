import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Context = createContext();

const API_BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const Provider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('Fetching todos with token:', token);
      const response = await axios.get(`${API_BASE_URL}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTodos(response.data);
      setError(null);
    } catch (err) {
      console.error('Fetch todos error:', err.response?.data || err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (todo) => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('Adding todo with token:', token);
      console.log('Sending request to:', `${API_BASE_URL}/`);
      const response = await axios.post(`${API_BASE_URL}/`, todo, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setTodos([...todos, response.data]);
      return response.data;
    } catch (err) {
      console.error('Add todo error:', err.response?.data || err.message);
      setError(err.message);
      throw err;
    }
  };

  const deleteTodo = async (id) => {
    try {
      const token = await AsyncStorage.getItem('token');
      await axios.delete(`${API_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error('Delete todo error:', err);
      setError(err.message);
      throw err;
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.patch(`${API_BASE_URL}/${id}`, updatedTodo, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
      return response.data;
    } catch (err) {
      console.error('Update todo error:', err);
      setError(err.message);
      throw err;
    }
  };

  return (
    <Context.Provider value={{ 
      todos, 
      loading, 
      error, 
      addTodo, 
      deleteTodo, 
      updateTodo,
      refreshTodos: fetchTodos 
    }}>
      {children}
    </Context.Provider>
  );
}; 