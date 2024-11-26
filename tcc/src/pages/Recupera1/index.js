import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ConfirmacaoRecuperacao({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperação de Senha</Text>
      <Text style={styles.subtitle}>Verifique seu e-mail para continuar o processo de recuperação de senha.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')} // Navega de volta para o login
      >
        <Text style={styles.buttonText}>Voltar para Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
