import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Context as TodoContext } from '../../context/TodoContext';

const ToDoDetail = ({ route }) => {
    const todo = route.params?.todo;

    if (!todo) {
        return (
            <View style={[styles.container, styles.centerContent]}>
                <Text style={styles.errorText}>Note not found</Text>
            </View>
        );
    }

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
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
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
    errorText: {
        fontSize: 16,
        color: '#666',
    },
});

export default ToDoDetail;
