import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProfileContext } from '../ProfileContext';

export default function MeScreen({ navigation }) {
  const { profileImage, profileName } = useContext(ProfileContext);


  return (
    <ScrollView style={styles.container}>
      {/* My Profile with Image */}
      <TouchableOpacity onPress={() => navigation.navigate('MyProfile')} style={styles.profileItem}>
  <View style={styles.row}>
    <Image source={profileImage ? { uri: profileImage } : require('../assets/avatar.png')} style={styles.avatar} />
    <View>
      <Text style={styles.label}>{profileName || 'My Profile'}</Text>
      <Text style={styles.subLabel}>View and update your profile</Text>
    </View>
  </View>
</TouchableOpacity>
  


      {/* Settings + Wi-Fi Container */}
      <View style={styles.sectionBox}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Settings')}>
          <View style={styles.row}>
            <Icon name="settings-outline" size={20} color="#000" style={styles.icon} />
            <Text style={styles.label}>Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('WiFiConfig')}>
          <View style={styles.row}>
            <Icon name="wifi-outline" size={20} color="#000" style={styles.icon} />
            <Text style={styles.label}>Device Wi-Fi Configuration</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Help Center Container */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>Help Center</Text>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FAQ')}>
          <View style={styles.row}>
            <Icon name="help-circle-outline" size={20} color="#000" style={styles.icon} />
            <Text style={styles.label}>FAQ</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('UserManual')}>
          <View style={styles.row}>
            <Icon name="book-outline" size={20} color="#000" style={styles.icon} />
            <Text style={styles.label}>User Manual</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Feedback')}>
          <View style={styles.row}>
            <Icon name="chatbox-ellipses-outline" size={20} color="#000" style={styles.icon} />
            <Text style={styles.label}>User Feedback</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ReleaseNotes')}>
          <View style={styles.row}>
            <Icon name="document-text-outline" size={20} color="#000" style={styles.icon} />
            <Text style={styles.label}>Release Notes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('About')}>
          <View style={styles.row}>
            <Icon name="information-circle-outline" size={20} color="#000" style={styles.icon} />
            <Text style={styles.label}>About</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4FF',
  },

  profileItem: {
    marginBottom: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  sectionBox: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 15,
    color: '#000',
  },
  subLabel: {
    fontSize: 12,
    color: '#444',
  },
});
