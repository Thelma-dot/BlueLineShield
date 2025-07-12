import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmergencyAlertsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Alerts</Text>
      <Text>Manage and receive real-time emergency alerts here.</Text>
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
