import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VisitorManagementScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visitor Management</Text>
      <Text>Track, register, and manage visitors from this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#fff'
  },
  title: {
    fontSize: 20, fontWeight: 'bold', marginBottom: 10
  },
});
