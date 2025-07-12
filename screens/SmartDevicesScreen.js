import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, Switch, TouchableOpacity,
  ScrollView, Modal, TextInput, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Ionicons, MaterialCommunityIcons, FontAwesome5
} from '@expo/vector-icons';

const DEVICE_KEY = 'SMART_DEVICE_STATES';

const initialDevices = [
  { id: '1', name: 'Living Room Light', type: 'light', room: 'Living Room', isOn: false },
  { id: '2', name: 'Bedroom Light', type: 'light', room: 'Bedroom', isOn: true },
  { id: '3', name: 'Smart TV', type: 'tv', room: 'Living Room', isOn: false },
  { id: '4', name: 'Fan', type: 'fan', room: 'Bedroom', isOn: false },
  { id: '5', name: 'Air Conditioner', type: 'ac', room: 'Living Room', isOn: true },
];

export default function SmartDevicesScreen() {
  const [devices, setDevices] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState('');
  const [newDeviceType, setNewDeviceType] = useState('');
  const [newDeviceRoom, setNewDeviceRoom] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentDeviceId, setCurrentDeviceId] = useState(null);

  useEffect(() => {
    loadDevices();
  }, []);

  useEffect(() => {
    if (devices.length) saveDevices();
  }, [devices]);

  const loadDevices = async () => {
    try {
      const stored = await AsyncStorage.getItem(DEVICE_KEY);
      if (stored) {
        setDevices(JSON.parse(stored));
      } else {
        setDevices(initialDevices);
      }
    } catch (err) {
      console.error('Load error:', err);
    }
  };

  const saveDevices = async () => {
    try {
      await AsyncStorage.setItem(DEVICE_KEY, JSON.stringify(devices));
    } catch (err) {
      console.error('Save error:', err);
    }
  };

  const toggleDevice = (id) => {
    setDevices(prev =>
      prev.map(device =>
        device.id === id ? { ...device, isOn: !device.isOn } : device
      )
    );
  };

  const handleAddDevice = () => {
    if (!newDeviceName || !newDeviceType || !newDeviceRoom) return;

    if (isEditing) {
      setDevices(prev =>
        prev.map(device =>
          device.id === currentDeviceId
            ? { ...device, name: newDeviceName, type: newDeviceType.toLowerCase(), room: newDeviceRoom }
            : device
        )
      );
    } else {
      const newDevice = {
        id: Date.now().toString(),
        name: newDeviceName,
        type: newDeviceType.toLowerCase(),
        room: newDeviceRoom,
        isOn: false,
      };
      setDevices([...devices, newDevice]);
    }

    setModalVisible(false);
    setNewDeviceName('');
    setNewDeviceType('');
    setNewDeviceRoom('');
    setIsEditing(false);
    setCurrentDeviceId(null);
  };

  const handleEditPress = (device) => {
    setIsEditing(true);
    setCurrentDeviceId(device.id);
    setNewDeviceName(device.name);
    setNewDeviceType(device.type);
    setNewDeviceRoom(device.room);
    setModalVisible(true);
  };

  const handleDeleteDevice = (id) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to remove this device?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete', style: 'destructive',
        onPress: () => setDevices(devices.filter(device => device.id !== id))
      }
    ]);
  };

  const renderIcon = (type, isOn) => {
    const color = isOn
      ? {
          light: '#FFA500',
          tv: '#007BFF',
          fan: '#888',
          ac: '#00CED1'
        }[type] || '#000'
      : '#aaa';

    switch (type) {
      case 'light':
        return <Ionicons name="bulb-outline" size={22} color={color} />;
      case 'tv':
        return <MaterialCommunityIcons name="television" size={22} color={color} />;
      case 'fan':
        return <FontAwesome5 name="fan" size={22} color={color} />;
      case 'ac':
        return <MaterialCommunityIcons name="air-conditioner" size={22} color={color} />;
      default:
        return <Ionicons name="help-circle-outline" size={22} color={color} />;
    }
  };

  const uniqueRooms = ['All', ...new Set(devices.map(d => d.room))];
  const filteredDevices = selectedRoom === 'All'
    ? devices
    : devices.filter(d => d.room === selectedRoom);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Smart Devices</Text>

      {/* Room Filters */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.roomFilterContainer}>
        {uniqueRooms.map(room => (
          <TouchableOpacity
            key={room}
            style={[
              styles.roomButton,
              selectedRoom === room && styles.selectedRoomButton
            ]}
            onPress={() => setSelectedRoom(room)}
          >
            <Text style={[
              styles.roomButtonText,
              selectedRoom === room && styles.selectedRoomButtonText
            ]}>{room}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Device Cards */}
      <View style={styles.deviceList}>
        {filteredDevices.map(device => (
          <View key={device.id} style={styles.card}>
            {renderIcon(device.type, device.isOn)}
            <Text style={styles.cardLabel}>{device.name}</Text>
            <Switch
              value={device.isOn}
              onValueChange={() => toggleDevice(device.id)}
              trackColor={{ false: '#ccc', true: '#007BFF' }}
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => handleEditPress(device)}>
                <Ionicons name="create-outline" size={20} color="#007BFF" style={styles.iconBtn} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteDevice(device.id)}>
                <Ionicons name="trash-outline" size={20} color="#FF3B30" style={styles.iconBtn} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Add Device Button */}
      <TouchableOpacity style={styles.addBtn} onPress={() => {
        setIsEditing(false);
        setNewDeviceName('');
        setNewDeviceType('');
        setNewDeviceRoom('');
        setModalVisible(true);
      }}>
        <Ionicons name="add-circle-outline" size={24} color="#fff" />
        <Text style={styles.addText}>Add Device</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{isEditing ? 'Edit Device' : 'Add Device'}</Text>
            <TextInput
              style={styles.input}
              placeholder="Device Name"
              value={newDeviceName}
              onChangeText={setNewDeviceName}
            />
            <TextInput
              style={styles.input}
              placeholder="Device Type (light, tv, fan, ac)"
              value={newDeviceType}
              onChangeText={setNewDeviceType}
            />
            <TextInput
              style={styles.input}
              placeholder="Room (e.g., Bedroom)"
              value={newDeviceRoom}
              onChangeText={setNewDeviceRoom}
            />
            <TouchableOpacity style={styles.saveBtn} onPress={handleAddDevice}>
              <Text style={styles.saveText}>{isEditing ? 'Update' : 'Add'} Device</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelBtn}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f9ff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  roomFilterContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  roomButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
  },
  selectedRoomButton: {
    backgroundColor: '#007BFF',
  },
  roomButtonText: {
    color: '#000',
    fontSize: 14,
  },
  selectedRoomButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deviceList: {
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    elevation: 1,
  },
  cardLabel: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  iconBtn: {
    marginLeft: 10,
  },
  addBtn: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  saveBtn: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelBtn: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: '#888',
  },
  input: {
  borderWidth: 1,
  borderColor: '#ddd',
  backgroundColor: '#f5f9ff',
  padding: 12,
  borderRadius: 10,
  fontSize: 14,
  color: '#000',
  marginBottom: 12,
},
saveBtn: {
  backgroundColor: '#007BFF',
  padding: 12,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 10,
},
saveText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 15,
},
cancelBtn: {
  marginTop: 10,
  alignItems: 'center',
},
cancelText: {
  color: '#555',
  fontSize: 14,
},
modalTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 15,
  textAlign: 'center',
  color: '#000',
},
modalContainer: {
  backgroundColor: '#fff',
  borderRadius: 15,
  padding: 20,
  elevation: 5,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 10,
},

});
