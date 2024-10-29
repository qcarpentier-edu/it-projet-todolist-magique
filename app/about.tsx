import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>À propos de l'Application Magique</Text>
      <Text style={styles.content}>
        Cette application de To-Do List magique a été créée pour vous aider à gérer vos potions, vos sorts,
        et vos tâches quotidiennes comme un véritable sorcier !
      </Text>
      <Link href="/" style={styles.homeLink}>
        <Text style={styles.homeText}>Retour à la liste des tâches</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6b52ae',
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  homeLink: {
    marginTop: 20,
  },
  homeText: {
    color: '#6b52ae',
    textAlign: 'center',
  },
});

export default AboutScreen