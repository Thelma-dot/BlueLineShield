import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationScreen({ navigation }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Camera Motion Detected',
      message: 'Motion detected in the backyard at 2:45 PM',
      time: '2 mins ago',
      icon: 'videocam-outline',
      read: false,
    },
    {
      id: 2,
      title: 'Door Unlocked',
      message: 'Front door unlocked using fingerprint',
      time: '1 hour ago',
      icon: 'lock-open-outline',
      read: false,
    },
    {
      id: 3,
      title: 'Visitor Alert',
      message: 'New visitor recorded at gate',
      time: 'Today, 10:12 AM',
      icon: 'person-outline',
      read: false,
    },
    {
      id: 4,
      title: 'System Update',
      message: 'Security system updated successfully',
      time: 'Yesterday',
      icon: 'cloud-done-outline',
      read: false,
    },
  ]);

  const markAllAsRead = () => {
    const updated = notifications.map(n => ({ ...n, read: true }));
    setNotifications(updated);
  };

  const clearAll = () => {
    Alert.alert('Clear All', 'Are you sure you want to delete all notifications?', [
      { text: 'Cancel' },
      { text: 'Clear', onPress: () => setNotifications([]), style: 'destructive' },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      

      {/* Action Buttons */}
      <View style={styles.actionRow}>
        <TouchableOpacity onPress={markAllAsRead}>
          <Text style={styles.actionText}>Mark All as Read</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clearAll}>
          <Text style={[styles.actionText, { color: '#FF3B30' }]}>Clear All</Text>
        </TouchableOpacity>
      </View>

      {/* Notification List */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {notifications.map((note) => (
          <View key={note.id} style={styles.card}>
            <Ionicons name={note.icon} size={24} color="#007BFF" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={[styles.title, note.read && styles.read]}>{note.title}</Text>
              <Text style={[styles.message, note.read && styles.read]}>{note.message}</Text>
              <Text style={[styles.time, note.read && styles.read]}>{note.time}</Text>
            </View>
          </View>
        ))}
        {notifications.length === 0 && (
          <Text style={{ textAlign: 'center', color: '#888', marginTop: 20 }}>
            No notifications
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  actionText: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: '600',
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  message: {
    fontSize: 13,
    color: '#555',
    marginVertical: 2,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  read: {
    color: '#aaa',
  },
});
