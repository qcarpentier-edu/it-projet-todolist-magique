import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TaskItem from '../components/TaskItem';
import { Link } from 'expo-router';

// Définition du type Task
interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const ToDoListScreen = () => {
  const [task, setTask] = useState<string>(''); // Typage de l'état task comme une chaîne de caractères
  const [tasks, setTasks] = useState<Task[]>([]); // Typage de l'état tasks comme un tableau de tâches

  const addTask = () => {
    if (task.trim()) {
      const newTask: Task = { id: Date.now().toString(), text: task, completed: false }; // Créer une nouvelle tâche avec le bon type
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

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
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggleCompletion={() => toggleTaskCompletion(item.id)}
            onRemove={() => removeTask(item.id)}
          />
        )}
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

export default ToDoListScreen