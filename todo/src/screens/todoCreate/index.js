import React, { useState, useRef, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Context as TodoContext } from '../../context/TodoContext';

const ToDoCreateScreen = () => {
  const navigation = useNavigation();
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isChecklist, setIsChecklist] = useState(false);
  const [textColor, setTextColor] = useState('#000000');

  const handleSave = () => {
    if (!title.trim()) {
      // Show error message if title is empty
      Alert.alert('Error', 'Please enter a title for your todo');
      return;
    }

    addTodo({
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      isChecklist,
      textColor,
      createdAt: new Date(),
    });

    navigation.navigate('todoListFlow', { screen: 'ToDoList' });
  };

  const handleChecklistToggle = () => {
    setIsChecklist(!isChecklist);
    if (!isChecklist) {
      // Add checklist template
      setContent(content + '\n- [ ] New task\n');
    }
  };

  const handleColorChange = (color) => {
    setTextColor(color);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave}>
          <Icon name="save" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.toolbar}>
        <TouchableOpacity
          style={[styles.toolbarButton, isChecklist && styles.activeButton]}
          onPress={handleChecklistToggle}
        >
          <Icon name="check-box" size={24} color={isChecklist ? '#007AFF' : '#000'} />
        </TouchableOpacity>

        <View style={styles.colorPicker}>
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#000000' }]}
            onPress={() => handleColorChange('#000000')}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#FF0000' }]}
            onPress={() => handleColorChange('#FF0000')}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#00FF00' }]}
            onPress={() => handleColorChange('#00FF00')}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#0000FF' }]}
            onPress={() => handleColorChange('#0000FF')}
          />
        </View>
      </View>

      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <ScrollView style={styles.editorContainer}>
        <TextInput
          style={[styles.contentInput, { color: textColor }]}
          multiline
          placeholder="Start writing..."
          value={content}
          onChangeText={setContent}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  toolbarButton: {
    padding: 8,
    marginRight: 8,
  },
  activeButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  colorPicker: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  colorButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  titleInput: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  editorContainer: {
    flex: 1,
  },
  contentInput: {
    flex: 1,
    minHeight: 300,
    padding: 16,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ToDoCreateScreen;
