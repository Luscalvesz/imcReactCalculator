import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    
    function Entrar() {
        navigation.navigate('Calculadora')
           

    }

    return (
        <View style={styles.app}>
            <LinearGradient
                colors={['rgba(171,0,255,1)', 'rgba(12,3,133,1)']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%',
                }}
            />
            <FontAwesome name='calculator' size={75} color='white' />
            <Text style={styles.titulo}>Calculadora de IMC</Text>
            <Text style={styles.subTitulo}>Para usar o nosso aplicativo, faça login abaixo utilizando e-mail e senha</Text>
            <TextInput
                placeholder='Informe o seu e-mail: '
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder='Informe a sua senha: '
                style={styles.input}
                value={senha}
                onChangeText={(text) => setSenha(text)}
            />
            <LinearGradient
                colors={['rgba(171,0,255,1)', 'rgba(12,3,133,1)']}
                style={{ borderRadius: 25, position: 'relative', top: 35 }}
            >
                <TouchableOpacity onPress={Entrar} style={styles.entrar}>
                    <Text style={styles.entrarTexto}>Entrar</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default Login;
