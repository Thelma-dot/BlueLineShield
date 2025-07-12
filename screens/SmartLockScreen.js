import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SmartLockScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Lock Access</Text>
      <Text>Control and monitor your smart locks from this screen.</Text>
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
