import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('');

  // Função de envio de link de recuperação (simulado)
  const handleRecuperarSenha = () => {
    // Verificar se o e-mail está no formato correto
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(email)) {
      // Aqui, você deve fazer uma requisição ao backend para enviar o link
      Alert.alert('E-mail enviado', 'Enviamos um link para o seu e-mail para redefinir sua senha.');
      setEmail('');
    } else {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.subtitle}>Digite o seu e-mail para receber o link de recuperação.</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"/>
        
      <TouchableOpacity style={styles.button} onPress={handleRecuperarSenha}>
        <Text style={styles.buttonText}>Enviar Link</Text>
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
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 20,
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
