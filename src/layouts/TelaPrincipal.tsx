import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';

import Exemplo1 from '../components/Exemplo1';
import ExercicioNota from '../components/ExercicioNota';
import ExemploEvento from '../components/ExemploEvento';
import ExemploState from '../components/ExemploState';
import ExemploConstrucaoCondicao from '../components/ExemploConstrucaoCondicao';
import { useNavigation } from '@react-navigation/native';

const TelaPrincipal = (props: PrincipalProps) => {
    
    return (
        
        <View style={styles.container}>
            <Pressable 
                style={styles.button} 
                onPress={() => props.navigation.navigate('TelaSecundaria')}
            >
                <Text style={styles.buttonText}>Ir para a Tela Secundária</Text>
            </Pressable>

            <Pressable 
                style={[styles.button, { marginTop: 20 }]} 
                onPress={() => props.navigation.goBack()}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </Pressable>

            <Pressable 
                style={styles.button} 
                onPress={() => props.navigation.navigate('TelaCadProdutos')}
            >
                <Text style={styles.buttonText}>Ir para a Tela Cadastro Produtos</Text>
            </Pressable>

            <Pressable 
                style={styles.button} 
                onPress={() => props.navigation.navigate('TelaConsProduto')}
            >
                <Text style={styles.buttonText}>Ir para a Tela Consultar Produtos</Text>
            </Pressable>

            <Pressable 
                style={styles.button} 
                onPress={() => props.navigation.navigate('TelaDeAlteracao')}
            >
                <Text style={styles.buttonText}>Ir para a Tela de Alteracao</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default TelaPrincipal;
