import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SecurityMonitoringScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Security Monitoring</Text>
      <Text>Details about 24/7 security monitoring go here.</Text>
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
