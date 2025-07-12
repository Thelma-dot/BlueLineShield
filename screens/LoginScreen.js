import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../ThemeContext';

export default function LoginScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Welcome to BlueLineShield</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={[styles.input, { color: theme.colors.text }]}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#888"
        style={[styles.input, { color: theme.colors.text }]}
      />

      <Button
        title="Login"
        color={theme.colors.primary}
        onPress={() => navigation.replace('DashboardTabs')}
      />

      {/* Sign Up Link */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={[styles.signupText, { color: theme.colors.primary }]}>
          Don’t have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
  },
});
