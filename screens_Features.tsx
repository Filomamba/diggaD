import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const features = [
  { id: '1', name: 'Feature 1', description: 'Description of Feature 1' },
  { id: '2', name: 'Feature 2', description: 'Description of Feature 2' },
  { id: '3', name: 'Feature 3', description: 'Description of Feature 3' },
  // Add more features as needed
];

export default function Features() {
  const renderFeature = ({ item }) => (
    <TouchableOpacity style={styles.featureItem}>
      <Text style={styles.featureName}>{item.name}</Text>
      <Text style={styles.featureDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Features</Text>
      <FlatList
        data={features}
        renderItem={renderFeature}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  featureItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  featureName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});