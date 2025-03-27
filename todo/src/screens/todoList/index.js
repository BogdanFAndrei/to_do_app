/**
 * Todo List Screen Component
 * 
 * This screen displays the main list of todo items for the authenticated user.
 * It serves as the primary interface for viewing and managing todo items.
 * 
 * Features:
 * - Displays a list of all todo items
 * - Allows navigation to todo item details
 * - Provides options to mark items as complete/incomplete
 * - Integrates with the todo management context
 * 
 * @component
 */

import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Context as TodoContext } from '../../context/TodoContext';
import todoListStyles from './styles';

const ToDoListScreen = () => {
  const navigation = useNavigation();
  const { todos, deleteTodo } = useContext(TodoContext);

  const renderTodoCard = ({ item }) => (
    <TouchableOpacity
      style={todoListStyles.card}
      onPress={() => navigation.navigate('ToDoEdit', { todo: item })}
    >
      <View style={todoListStyles.cardHeader}>
        <Text style={[todoListStyles.title, { color: item.color }]}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => deleteTodo(item._id)}
          style={todoListStyles.deleteButton}
        >
          <Icon name="delete" size={24} color="#FF3B30" />
        </TouchableOpacity>
      </View>
      <Text style={todoListStyles.date}>
        {new Date(item.createdAt).toLocaleDateString()}
      </Text>
      {item.completed && (
        <Icon name="check-box" size={16} color="#007AFF" style={todoListStyles.checklistIcon} />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={todoListStyles.container}>
      <FlatList
        data={todos}
        renderItem={renderTodoCard}
        keyExtractor={(item) => item._id}
        contentContainerStyle={todoListStyles.list}
        ListEmptyComponent={
          <View style={todoListStyles.emptyContainer}>
            <Text style={todoListStyles.emptyText}>No todos yet</Text>
            <TouchableOpacity
              style={todoListStyles.addButton}
              onPress={() => navigation.navigate('ToDoCreate')}
            >
              <Icon name="add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        }
      />
      <TouchableOpacity
        style={todoListStyles.fab}
        onPress={() => navigation.navigate('ToDoCreate')}
      >
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default ToDoListScreen;
