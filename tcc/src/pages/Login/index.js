import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function handleLogin() {
        if (username.trim() === '' || password.trim() === '') {
            Alert.alert('Opss', 'Preencha o nome e a senha para poder continuar.');
            return;
        }
        console.log('Nome:', username);
        console.log('Senha:', password);
        navigation.navigate('Inicio'); // Navega para a tela inicial após o login
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.margem}></View>
            <Text style={styles.title}>Login 🦷</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome:"
                value={username}
                onChangeText={setUsername}/>

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Digite sua senha:"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}/>

                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Icon
                        name={isPasswordVisible ? 'eye-off' : 'eye'}
                        size={24}
                        color="#666"/>
                </TouchableOpacity>
            </View>
            <Button
                title="Entrar"
                onPress={handleLogin}/>
            <View style={styles.cadastro}>
                <TouchableOpacity
                    style={styles.funcionarioButton}
                    onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={{ color: 'black', marginTop: 20 }}>Chegou agora? Cadastre-se aqui!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.forgotPasswordButton}
                    onPress={() => navigation.navigate('Recuperar')}>
                    <Text style={{ color: 'blue', marginTop: 20 }}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#D4F0F1',
    },
    margem: {
        height: 200,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '90%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 15,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    passwordInput: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 10,
    },
    eyeIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    forgotPasswordButton: {
        marginTop: 40,
        alignItems: 'center',
    },
    entrar: {
        marginTop: 20,
    },
    funcionarioButton: {
        marginTop: 20,
        alignItems: 'center',
    },
});