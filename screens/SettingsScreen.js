import React, { useContext, useState } from 'react';
import {
  View, Text, Switch, StyleSheet, TouchableOpacity, Alert, ScrollView
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ThemeContext';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function SettingsScreen({ navigation }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [deviceNotifications, setDeviceNotifications] = useState(true);
  const [alarmAudio, setAlarmAudio] = useState(false);
  const [callNotifications, setCallNotifications] = useState(true);

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "Log Out",
        onPress: () => navigation.replace('Login'),
        style: "destructive"
      },
    ]);
  };

  const handleAlarmInfo = () => {
    Alert.alert(
      "Alarm Audio Notification",
      "If the function is enabled, there will be voice prompts while receiving the special alarm reports. The settings will take effect after re-login."
    );
  };

  const CardRow = ({ icon, label, onPress, children, color = theme.colors.text }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.6 : 1} style={[styles.cardRow, { backgroundColor: theme.colors.card }]}>
      <View style={styles.rowContent}>
        <Ionicons name={icon} size={20} color={color} style={styles.icon} />
        <Text style={[styles.label, { color }]}>{label}</Text>
      </View>
      {children}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}  contentContainerStyle={{ paddingBottom: 40 }}>
      
      {/* 🔙 Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
          <Ionicons name="arrow-back" size={20} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.colors.text }]}>Settings</Text>
      </View>

      {/* Card Settings Group */}
      <View style={styles.cardGroup}>
        <CardRow icon="moon" label="Dark Mode">
          <Switch value={theme.isDark} onValueChange={toggleTheme} />
        </CardRow>

        <CardRow icon="language-outline" label="Language Settings" onPress={() => navigation.navigate('LanguageSettings')} />

        <CardRow icon="notifications-outline" label="Device Notifications">
          <Switch value={deviceNotifications} onValueChange={setDeviceNotifications} />
        </CardRow>

        <CardRow icon="settings-outline" label="Device Notification Settings" onPress={() => navigation.navigate('DeviceNotificationSettings')} />

        <CardRow icon="megaphone-outline" label="Alarm Audio Notification" onPress={handleAlarmInfo}>
          <Switch value={alarmAudio} onValueChange={setAlarmAudio} />
        </CardRow>

        <CardRow icon="call-outline" label="Call Notifications">
          <Switch value={callNotifications} onValueChange={setCallNotifications} />
        </CardRow>

        <CardRow icon="settings-outline" label="Call Notification Settings" onPress={() => navigation.navigate('CallNotificationSettings')} />

        <CardRow icon="person-outline" label="Emergency Contact" />

        <CardRow icon="log-out-outline" label="Log Out" onPress={handleLogout} color="#FF3B30" />
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backArrow: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardGroup: {
    gap: 15,
  },
  cardRow: {
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 12,
  },
  label: {
    fontSize: 15,
    flexShrink: 1,
  },
  cardGroup: {
  gap: 15,
  paddingVertical: 5,
},
label: {
  fontSize: 15,
  flexShrink: 1,
  flexWrap: 'wrap',
},


});
