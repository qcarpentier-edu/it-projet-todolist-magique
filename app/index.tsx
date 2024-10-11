import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TaskItem from '../components/TaskItem';
import { Link } from 'expo-router';

export default function ToDoListScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    
  };

  const toggleTaskCompletion = () => {
    
  };

  const removeTask = () => {

  };

  const renderItem = () => {
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧙‍♂️ Mon grimoire magique</Text>

      <TextInput
        style={styles.input}
        placeholder="Préparer une potion ou lancer un sort..."
        value={task}
        onChangeText={setTask}
      />

      <Button title="Ajouter une tâche" onPress={addTask} color="#6b52ae" />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <Link href="/about" style={styles.aboutLink}>
        <Text style={styles.aboutText}>En savoir plus sur cette application magique</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6b52ae',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#6b52ae',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  aboutLink: {
    marginTop: 20,
  },
  aboutText: {
    color: '#6b52ae',
    textAlign: 'center',
  },
});
