import React, { useContext, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView
} from 'react-native';
import { ThemeContext } from '../ThemeContext';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function CameraScreen() {
  const { theme } = useContext(ThemeContext);
  const [isRecording, setIsRecording] = useState(false);

  const handleRecord = () => {
    setIsRecording(!isRecording);
  };

  const handleSnapshot = () => {
    alert('📸 Snapshot captured!');
  };

  const handleSettings = () => {
    alert('⚙️ Camera settings not implemented yet.');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, { color: theme.colors.text }]}>Camera</Text>
      </View>

      {/* Camera Feed Card */}
      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.cardTitle, { color: theme.colors.text }]}>Live View</Text>

        {/* Big Camera Preview */}
        <View style={styles.cameraFeedLarge}>
          <Text style={{ color: '#aaa', fontSize: 16 }}>[ Live Camera Feed Area ]</Text>
        </View>

        {/* Status */}
        <View style={styles.statusRow}>
          <MaterialIcons
            name={isRecording ? 'fiber-manual-record' : 'pause-circle-outline'}
            size={18}
            color={isRecording ? '#FF3B30' : '#aaa'}
          />
          <Text style={[styles.statusText, { color: theme.colors.text }]}>
            {isRecording ? 'Recording in Progress' : 'Idle'}
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: '#007BFF' }]} onPress={handleSnapshot}>
            <Ionicons name="camera-outline" size={18} color="#fff" />
            <Text style={styles.btnText}>Snapshot</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: isRecording ? '#FF3B30' : '#00C851' }]}
            onPress={handleRecord}
          >
            <Ionicons name={isRecording ? 'stop-circle-outline' : 'radio-outline'} size={18} color="#fff" />
            <Text style={styles.btnText}>{isRecording ? 'Stop' : 'Record'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, { backgroundColor: '#FFA500' }]} onPress={handleSettings}>
            <Ionicons name="settings-outline" size={18} color="#fff" />
            <Text style={styles.btnText}>Settings</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 10,
  },
  cameraFeedLarge: {
    height: 350,
    backgroundColor: '#d9d9d9',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  statusText: {
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  btn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
