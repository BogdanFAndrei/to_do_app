import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';

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
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, { color: todo.textColor }]}>{todo.title}</Text>
                    <Text style={styles.date}>
                        {new Date(todo.createdAt).toLocaleDateString()}
                    </Text>
                </View>
                <View style={styles.divider} />
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
        padding: 20,
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        marginBottom: 16,
        backgroundColor: '#f8f8f8',
        padding: 16,
        borderRadius: 12,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    date: {
        fontSize: 14,
        color: '#666',
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 20,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
        paddingHorizontal: 4,
    },
    errorText: {
        fontSize: 16,
        color: '#666',
    },
});

export default ToDoDetail;
