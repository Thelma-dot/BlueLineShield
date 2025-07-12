import React, { useContext, useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView
} from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5
} from '@expo/vector-icons';
import { ThemeContext } from '../ThemeContext';

export default function ApplicationScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const [search, setSearch] = useState('');

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      {/* Header */}
      

      {/* Search Input */}
      <View style={[styles.searchBox, { borderColor: theme.colors.border }]}>
        <Ionicons name="search-outline" size={18} color={theme.colors.text} style={styles.searchIcon} />
        <TextInput
          style={[styles.searchInput, { color: theme.colors.text }]}
          placeholder="Search Application Name"
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Section: Personal Applications */}
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Personal Applications</Text>
      <View style={styles.cardContainer}>
        <AppCard icon="video-wireless-outline" label="Live View" IconPack={MaterialCommunityIcons} />
        <AppCard icon="play-back-circle-outline" label="Playback" IconPack={Ionicons} />
        <AppCard icon="bulb-outline" label="Smart Devices" IconPack={Ionicons} onPress={() => navigation.navigate('SmartDevices')} />
        <AppCard icon="share-social-outline" label="Sharing" IconPack={Ionicons} />
        <AppCard icon="images-outline" label="Personal Album" IconPack={Ionicons} />
      </View>

      {/* Section: Basic Tools */}
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Basic Tools</Text>
      <View style={styles.cardContainer}>
        <AppCard icon="wifi-outline" label="Wi-Fi Configuration" IconPack={Ionicons} />
        <AppCard icon="music-note-settings-outline" label="Custom Audio" IconPack={MaterialCommunityIcons} />
        <AppCard icon="chart-line" label="Network Stats" IconPack={FontAwesome5} />
      </View>
    </ScrollView>
  );
}

// ✅ Reusable Card Component
const AppCard = ({ icon, label, IconPack, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <IconPack name={icon} size={24} color="#007BFF" style={{ marginBottom: 5 }} />
    <Text style={styles.cardLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    paddingVertical: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  cardLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
});
