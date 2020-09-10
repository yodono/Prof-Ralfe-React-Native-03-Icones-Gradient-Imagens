import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import estiloLogin from './estiloLogin';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>
            <View style={estiloLogin.borda}>

                <Text style={estiloLogin.texto}>Login</Text>

                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Login"
                    onChangeText={login => setLogin(login)}
                    value={login}
                />

                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Senha"
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                />

                <TouchableOpacity style={estiloLogin.botaoContainer} onPress={entrar}>
                    <Text style={estiloLogin.botaoTexto}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Login;
