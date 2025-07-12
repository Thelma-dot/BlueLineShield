import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

export default function CountrySelectionScreen({ navigation }) {
  const [countryCode, setCountryCode] = useState('GH');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(true);

  const handleSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const handleContinue = () => {
    if (country) {
      // You can store country info in context or pass as params
      navigation.navigate('Login', { selectedCountry: country });
    } else {
      alert('Please select a country first.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Country</Text>

      <CountryPicker
        {...{
          countryCode,
          withFilter: true,
          withFlag,
          withCountryNameButton,
          withAlphaFilter: true,
          withCallingCode,
          onSelect: handleSelect,
        }}
        visible
      />

      {country && (
        <Text style={styles.selection}>
          Selected: {country.name.common} (+{country.callingCode[0]})
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff',
  },
  title: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 30, color: '#000',
  },
  selection: {
    marginTop: 20, fontSize: 16, color: '#000',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff', fontSize: 16, fontWeight: 'bold',
  },
});
