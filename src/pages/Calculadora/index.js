import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, NativeModules } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


function Calculadora() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('')
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [resultado, setResultado] = useState('')

    function Voltar() {
        navigation.goBack();
    };

    function calculo() {
        if (altura <= 1.00 || altura >= 2.30) {
            alert('Informe uma altura válida')
            return;
        }
        if (peso <= 25 || peso >= 150) {
            alert('Informe um peso válido')
            return;
        }

        const imc = (peso / (altura * altura)).toFixed(2)
        const mensagem = `Olá ${nome}! O seu imc é ${imc}, e você está na categoria: `

        if (imc < 18.5) {
            setResultado(`${mensagem} Abaixo do peso`)
        } else if (imc >= 18.5 && imc <= 24.9) {
            setResultado(`${mensagem} Peso Normal`)
        } else if (imc >= 25 && imc <= 29.9) {
            setResultado(`${mensagem} levemente acima do peso`)
        } else if (imc >= 30 && imc <= 34.9) {
            setResultado(` ${mensagem} Obesidade grau I`)
        } else if (imc >= 35 && imc <= 39.9) {
            setResultado(`${mensagem} Obesidade grau II`)
        } else {
            setResultado(`${mensagem} Obesidade grau III`)
        }

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
            <View style={styles.container}>
                <Text style={styles.titulo}>Para calcular o IMC, informe os campos abaixo :)</Text>
                <TextInput
                    placeholder='Digite o seu Nome:'
                    style={styles.input}
                    value={nome}
                    keyboardType="default"
                    onChangeText={(text) => setNome(text)}
                />
                <TextInput
                    placeholder='Digite a sua Altura:'
                    style={styles.input}
                    value={altura}
                    keyboardType="numeric"
                    onChangeText={(text) => setAltura(text)}
                />
                <TextInput
                    placeholder='Digite o seu Peso:'
                    style={styles.input}
                    value={peso}
                    keyboardType="numeric"
                    onChangeText={(text) => setPeso(text)}
                />
                
                <LinearGradient
                    colors={['rgba(171,0,255,1)', 'rgba(12,3,133,1)']}
                    style={{ borderRadius: 25, position: 'relative', top: 35 }}
                >
                    <TouchableOpacity style={styles.calcular} onPress={calculo}>
                        <Text style={styles.calcularBotao}>Calcular</Text>
                    </TouchableOpacity>
                </LinearGradient>
                
                
                



                <Text style={styles.resultado}>{resultado}</Text>
                <TouchableOpacity onPress={Voltar} style={styles.voltar}>
                    <Text style={styles.voltarTexto}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Calculadora;