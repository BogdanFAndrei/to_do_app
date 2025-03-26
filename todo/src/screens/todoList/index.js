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

const ToDoListScreen = () => {
  const navigation = useNavigation();
  const { todos, deleteTodo } = useContext(TodoContext);

  const renderTodoCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ToDoEdit', { todo: item })}
    >
      <View style={styles.cardHeader}>
        <Text style={[styles.title, { color: item.textColor }]}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => deleteTodo(item.id)}
          style={styles.deleteButton}
        >
          <Icon name="delete" size={24} color="#FF3B30" />
        </TouchableOpacity>
      </View>
      <Text style={styles.date}>
        {new Date(item.createdAt).toLocaleDateString()}
      </Text>
      {item.isChecklist && (
        <Icon name="check-box" size={16} color="#007AFF" style={styles.checklistIcon} />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderTodoCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No todos yet</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('ToDoCreate')}
            >
              <Icon name="add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        }
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('ToDoCreate')}
      >
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  checklistIcon: {
    marginTop: 4,
  },
  deleteButton: {
    padding: 4,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#007AFF',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ToDoListScreen;
