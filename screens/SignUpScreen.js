import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext';

export default function SignUpScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Create an Account</Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#888"
        style={[styles.input, { color: theme.colors.text }]}
      />
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
        title="Sign Up"
        color={theme.colors.primary}
        onPress={() => navigation.navigate('Dashboard')}
      />

      <Text
        onPress={() => navigation.goBack()}
        style={[styles.loginText, { color: theme.colors.primary }]}
      >
        Already have an account? Login
      </Text>
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
  loginText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 14,
  },
});
