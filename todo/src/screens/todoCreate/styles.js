import { StyleSheet } from 'react-native';

export const todoCreateStyles = StyleSheet.create({
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

export default todoCreateStyles;