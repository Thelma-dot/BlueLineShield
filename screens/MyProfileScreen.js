import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ProfileContext } from '../ProfileContext';

export default function MyProfileScreen({navigation}) {
  const { profileImage, setProfileImage, profileName, setProfileName } = useContext(ProfileContext);
  const [localImage, setLocalImage] = useState(profileImage || null);
  const [name, setName] = useState(profileName || '');
  const [email, setEmail] = useState('thelmabuabeng4@gmail.com');
  const [phone, setPhone] = useState('+233 595 634 868');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Camera roll access is needed to upload your profile photo.');
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const selectedUri = result.assets[0].uri;
        setLocalImage(selectedUri);
        setProfileImage(selectedUri); // ✅ Update context globally
      }
    } catch (error) {
      console.error('Image pick error:', error);
    }
  };

  


  const handleSave = () => {
  setProfileName(name); // 👈 Save name to global context
  setProfileImage(localImage); // 👈 Save image to global context

  Alert.alert('✅ Profile Updated', 'Your changes have been saved.');
  navigation.goBack(); // 👈 Go back to MeScreen
};
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={localImage ? { uri: localImage } : require('../assets/avatar.png')}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <Text style={styles.uploadText}>Tap to change profile picture</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#888"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        placeholderTextColor="#888"
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#007BFF',
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    color: '#000',
  },
  saveBtn: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
