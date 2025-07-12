import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { triggerMotionNotification } from '../utils/Notifications';

export default function DashboardScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  const locationDetails = {
    locationType: 'Home',
    address: '123 Main Street, Accra',
    liveFeedLink: 'https://secure.bluelineshield.com/live/USER_ID',
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      {/* Header */}
      

      {/* Live Camera Card */}
      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.cardTitle, { color: theme.colors.text }]}>Live Camera</Text>
        <View style={styles.cameraFeed}>
          <Text style={{ color: '#999' }}>[ Live Camera Feed Placeholder ]</Text>
        </View>
        <TouchableOpacity
          style={[styles.cardButton, { backgroundColor: '#00BFFF' }]}
          onPress={() => navigation.navigate('Camera')}
        >
          <Ionicons name="videocam-outline" size={18} color="#fff" />
          <Text style={styles.cardButtonText}>View Camera</Text>
        </TouchableOpacity>
      </View>

      {/* Emergency Actions */}
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.card, styles.actionCard, { backgroundColor: '#FF3B30' }]}
          onPress={() => navigation.navigate('Alert', locationDetails)}
        >
          <Ionicons name="alert-circle-outline" size={24} color="#fff" />
          <Text style={styles.cardButtonText}>Panic Button</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.actionCard, { backgroundColor: '#00BFFF' }]}
          onPress={() => navigation.navigate('FaceID')}
        >
          <Ionicons name="scan-outline" size={24} color="#fff" />
          <Text style={styles.cardButtonText}>Scan Face ID</Text>
        </TouchableOpacity>
      </View>

      {/* Motion Detection */}
      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.cardTitle, { color: theme.colors.text }]}>Motion Simulation</Text>
        <TouchableOpacity
          style={[styles.motionButton, { backgroundColor: theme.colors.primary }]}
          onPress={triggerMotionNotification}
        >
          <Ionicons name="walk-outline" size={18} color="#fff" />
          <Text style={styles.motionText}>Simulate Motion Detection</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  cameraFeed: {
    height: 180,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 8,
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 20,
  },
  actionCard: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  motionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  motionText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
