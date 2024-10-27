import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
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
        <ImageBackground
        source={require('..//images/LoginFarmacia.jpg')}
        style={{ flex: 1 }}
    >

        <Text style={styles.cabecalho}> Farmácia </Text>
        <View style={styles.container}>
            <Pressable 
                style={styles.button} 
                onPress={() => props.navigation.navigate('CadastroCliente')}
            >
                <Text style={styles.textoBotao}>Cadastrar Cliente </Text>
            </Pressable>

            

            <Pressable 
                style={styles.button} 
                onPress={() => props.navigation.navigate('CadastroProdutos')}
            >
                <Text style={styles.textoBotao}>Cadastrar Produto</Text>
            </Pressable>

            <Pressable 
                style={styles.button} 
                onPress={() => props.navigation.navigate('TelaConsProduto')}
            >
                <Text style={styles.textoBotao}>Ir para a Tela Consultar Produtos</Text>
            </Pressable>

            <Pressable 
                style={styles.button} 
                onPress={() => props.navigation.navigate('TelaDeAlteracao')}
            >
                <Text style={styles.textoBotao}>Ir para a Tela de Alteracao</Text>
            </Pressable>
            <Pressable 
                style={[styles.button, { marginTop: 20 }]} 
                onPress={() => props.navigation.navigate('LoginFarmacia')}
            >
                <Text style={styles.botaoVoltar}>Voltar a Tela Inicial</Text>
            </Pressable>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    cabecalho:{
        backgroundColor: 'brown',
        fontSize: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 10,
        color: 'black'
    },
    container: {
        fontSize: 70,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 20,
        fontWeight: 'bold',
        color: 'brown',
        textAlign: 'center',
        margin: 0,
        marginTop: 210
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        margin: 20,
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center'
    },
    botaoVoltar:{
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center'
        
    }
});

export default TelaPrincipal;
