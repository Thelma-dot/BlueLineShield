import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ServicesScreen({ navigation }) {
  const services = [
    {
      name: 'Security Monitoring',
      icon: 'shield-checkmark-outline',
      screen: 'SecurityMonitoring',
      description: '24/7 protection for your home or office.',
    },
    {
      name: 'Smart Lock Access',
      icon: 'lock-closed-outline',
      screen: 'SmartLock',
      description: 'Secure and easy entry with mobile control.',
    },
    {
      name: 'Emergency Alerts',
      icon: 'alert-circle-outline',
      screen: 'EmergencyAlerts',
      description: 'Instant notifications in case of danger.',
    },
    {
      name: 'Visitor Management',
      icon: 'person-add-outline',
      screen: 'VisitorManagement',
      description: 'Track and manage visitors seamlessly.',
    },
    {
      name: 'Maintenance Support',
      icon: 'construct-outline',
      screen: 'MaintenanceSupport',
      description: 'Quick help for technical issues or repairs.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {services.map((service, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate(service.screen)}
        >
          <Icon name={service.icon} size={30} color="#007BFF" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{service.name}</Text>
            <Text style={styles.description}>{service.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f9ff',
    flexGrow: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
