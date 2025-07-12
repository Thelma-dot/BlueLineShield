import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MaintenanceSupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maintenance Support</Text>
      <Text>Request maintenance and technical support services here.</Text>
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
