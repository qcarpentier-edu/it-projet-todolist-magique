import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// On définit à nouveau le type Task pour que les props soient bien typées
interface Task {
  id: string;
  text: string;
  completed: boolean;
}

// On définit le type des props de TaskItem
interface TaskItemProps {
  task: Task;
  onToggleCompletion: () => void;
  onRemove: () => void;
}

const TaskItem = ({ task, onToggleCompletion, onRemove }: TaskItemProps) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={onToggleCompletion}>
        <Text style={[styles.taskText, task.completed && styles.completedTask]}>
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemove}>
        <Ionicons name="trash-outline" size={24} color="#6b52ae" />
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