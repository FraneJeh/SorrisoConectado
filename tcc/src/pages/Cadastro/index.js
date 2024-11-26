import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Services/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro() { 
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState(''); 
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  // Função para formatar CPF
  const formatarCpf = (value) => {
    return value
      .replace(/\D/g, '') 
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  // Função para formatar número de telefone
  const formatarCelular = (value) => {
    return value
      .replace(/\D/g, '') 
      .replace(/(\d{2})(\d)/, '($1) $2') 
      .replace(/(\d{4,5})(\d{4})$/, '$1-$2'); 
  };

  // Função para formatar data de nascimento
  const formatarDataNascimento = (value) => {
    return value
      .replace(/\D/g, '') 
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d{1,4})$/, '$1/$2'); 
  };

  async function Cadastrar() {
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      await addDoc(collection(db, 'Usuarios'), {
        CPF: cpf,
        Celular: celular,
        DataNascimento: dataNascimento,
        Endereço: endereco,
        Nome: nome,
        Sexo: sexo,
        Senha: senha,
      });
      navigation.navigate('Login');
    } catch (error) {
      console.error("Erro ao cadastrar usuário: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Novo cadastro</Text>
        <TouchableOpacity style={styles.header1} onPress={() => navigation.goBack()}></TouchableOpacity>
      </View>
      
      <ScrollView style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nome</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite o nome"/>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DADOS GERAIS</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Data de nascimento</Text>
            <TextInput
              style={styles.input}
              value={dataNascimento}
              onChangeText={(text) => setDataNascimento(formatarDataNascimento(text))}
              placeholder="DD/MM/AAAA"
              keyboardType="numeric"/>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Sexo</Text>
            <View style={styles.radioContainer}>
              <TouchableOpacity
                style={[styles.radioButton, sexo === 'Masculino' && styles.radioButtonSelected]}
                onPress={() => setSexo('Masculino')}>
                <Text style={styles.radioButtonText}>Masculino</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.radioButton, sexo === 'Feminino' && styles.radioButtonSelected]}
                onPress={() => setSexo('Feminino')}>
                <Text style={styles.radioButtonText}>Feminino</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>CPF</Text>
            <TextInput
              style={styles.input}
              value={cpf}
              onChangeText={(text) => setCpf(formatarCpf(text))}
              placeholder="Digite o CPF"
              keyboardType="numeric"/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Celular</Text>
            <TextInput
              style={styles.input}
              value={celular}
              onChangeText={(text) => setCelular(formatarCelular(text))}
              placeholder="Digite o número"
              keyboardType="numeric"/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Endereço</Text>
            <TextInput
              style={styles.input}
              value={endereco}
              onChangeText={setEndereco}
              placeholder="Digite o endereço"/>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Criar Senha</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder="Crie uma senha"
                secureTextEntry={!mostrarSenha}/>
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setMostrarSenha(!mostrarSenha)}>
                <Ionicons name={mostrarSenha ? "eye-off" : "eye"} size={20} color="#333" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirmar Senha</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                placeholder="Confirme a senha"
                secureTextEntry={!mostrarConfirmarSenha}/>
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}>
                <Ionicons name={mostrarConfirmarSenha ? "eye-off" : "eye"} size={20} color="#333" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={Cadastrar}>
          <Text style={styles.confirmButtonText}>Confirmar Cadastro</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#D4F0F1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'center',
  },
  header1: {
    position: 'absolute',
    left: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginLeft: 8,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  radioButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  radioButtonSelected: {
    backgroundColor: '#00dddd',
  },
  radioButtonText: {
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#00dddd',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 55,
    width: '100%',
    alignSelf: 'center',
  },
  confirmButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
