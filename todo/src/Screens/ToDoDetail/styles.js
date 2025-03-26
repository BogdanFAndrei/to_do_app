import { StyleSheet, Platform } from 'react-native';

const todoDetailStyles = StyleSheet.create({
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

export default todoDetailStyles;