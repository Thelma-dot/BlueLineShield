import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ThemeContext } from '../ThemeContext';

export default function AlertScreen({ route, navigation }) {
  const { locationType, address, liveFeedLink } = route.params || {};
  const { theme } = useContext(ThemeContext);

  const sendAlert = async () => {
    try {
      await fetch('https://your-backend.com/api/alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: locationType,
          address,
          feed_url: liveFeedLink,
        }),
      });

    Alert.alert('Alert Sent', 'Police have been notified with your location and live feed.');
    navigation.navigate('Dashboard');
     } catch (error) {
      Alert.alert('Error', 'Failed to send alert to police.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Emergency Alert</Text>

      <View style={styles.box}>
        <Text style={[styles.text, { color: theme.colors.text }]}>Address: 123 Main Street, Accra</Text>
      <Text style={styles.label}>Location Type: {locationType}</Text>
      
        <Text style={[styles.text, { color: theme.colors.text }]}>Camera: Live feed attached</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={[styles.cancelBtn, { borderColor: theme.colors.primary }]} onPress={() => navigation.goBack()}>
          <Text style={{ color: theme.colors.primary }}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.sendBtn, { backgroundColor: theme.colors.danger }]} onPress={sendAlert}>
          <Text style={styles.sendText}>Send Alert</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  text: { fontSize: 16, marginBottom: 5 },
  actions: { flexDirection: 'row', justifyContent: 'space-between' },
  cancelBtn: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  sendBtn: {
    padding: 12,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  sendText: { color: '#fff', fontWeight: 'bold' },
});
