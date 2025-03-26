import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Context as TodoContext } from '../../context/TodoContext';

const ToDoDetail = ({ route }) => {
    const { todo } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={[styles.title, { color: todo.textColor }]}>{todo.title}</Text>
                <Text style={[styles.content, { color: todo.textColor }]}>{todo.content}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default ToDoDetail;
