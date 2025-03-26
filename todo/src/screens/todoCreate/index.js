import React, { useState, useContext } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Context as TodoContext } from '../../context/TodoContext';
import todoCreateStyles from './styles';

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
    <View style={todoCreateStyles.container}>
      <View style={todoCreateStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave}>
          <Icon name="save" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={todoCreateStyles.toolbar}>
        <TouchableOpacity
          style={[todoCreateStyles.toolbarButton, isChecklist && todoCreateStyles.activeButton]}
          onPress={handleChecklistToggle}
        >
          <Icon name="check-box" size={24} color={isChecklist ? '#007AFF' : '#000'} />
        </TouchableOpacity>

        <View style={todoCreateStyles.colorPicker}>
          <TouchableOpacity
            style={[todoCreateStyles.colorButton, { backgroundColor: '#000000' }]}
            onPress={() => handleColorChange('#000000')}
          />
          <TouchableOpacity
            style={[todoCreateStyles.colorButton, { backgroundColor: '#FF0000' }]}
            onPress={() => handleColorChange('#FF0000')}
          />
          <TouchableOpacity
            style={[todoCreateStyles.colorButton, { backgroundColor: '#00FF00' }]}
            onPress={() => handleColorChange('#00FF00')}
          />
          <TouchableOpacity
            style={[todoCreateStyles.colorButton, { backgroundColor: '#0000FF' }]}
            onPress={() => handleColorChange('#0000FF')}
          />
        </View>
      </View>

      <TextInput
        style={todoCreateStyles.titleInput}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <ScrollView style={todoCreateStyles.editorContainer}>
        <TextInput
          style={[todoCreateStyles.contentInput, { color: textColor }]}
          multiline
          placeholder="Start writing..."
          value={content}
          onChangeText={setContent}
        />
      </ScrollView>
    </View>
  );
};



export default ToDoCreateScreen;
