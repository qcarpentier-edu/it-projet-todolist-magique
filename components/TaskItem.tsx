import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = () => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity>
        <Text style={[styles.taskText]}>

        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 5,
  },
  taskText: {
    fontSize: 18,
    color: '#6b52ae',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});

export default TaskItem