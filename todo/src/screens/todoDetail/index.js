import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import todoDetailStyles from './styles';

const ToDoDetail = ({ route }) => {
    const todo = route.params?.todo;

    if (!todo) {
        return (
            <View style={[todoDetailStyles.container, todoDetailStyles.centerContent]}>
                <Text style={todoDetailStyles.errorText}>Note not found</Text>
            </View>
        );
    }

    return (
        <ScrollView style={todoDetailStyles.container}>
            <View style={todoDetailStyles.contentContainer}>
                <View style={todoDetailStyles.titleContainer}>
                    <Text style={[todoDetailStyles.title, { color: todo.textColor }]}>{todo.title}</Text>
                    <Text style={todoDetailStyles.date}>
                        {new Date(todo.createdAt).toLocaleDateString()}
                    </Text>
                </View>
                <View style={todoDetailStyles.divider} />
                <Text style={[todoDetailStyles.content, { color: todo.textColor }]}>{todo.content}</Text>
            </View>
        </ScrollView>
    );
};



export default ToDoDetail;
