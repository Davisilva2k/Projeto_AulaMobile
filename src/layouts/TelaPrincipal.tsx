import React from 'react';
import { Animated, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
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
            <Text style={styles.SubTitulo}>Clique na Opção desejada</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => props.navigation.navigate('CadastroCliente')}
                >
                    <Text style={styles.textoBotao}>1° Cadastrar Cliente </Text>
                </Pressable>



                <Pressable
                    style={styles.button}
                    onPress={() => props.navigation.navigate('CadastroProdutos')}
                >
                    <Text style={styles.textoBotao}>2° Cadastrar Produto</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => props.navigation.navigate('TelaConsProduto')}
                >
                    <Text style={styles.textoBotao}>3° Ir para a Tela Consultar Produtos</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => props.navigation.navigate('TelaConsCliente')}
                >
                    <Text style={styles.textoBotao}>4° Ir para a Tela de Consultar Cliente</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => props.navigation.navigate('TelaDeAlteracao')}
                >
                    <Text style={styles.textoBotao}>5° Ir para a Tela de Alteracao</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, { marginTop: 20 }]}
                    onPress={() => props.navigation.navigate('LoginFuncionarioFarmacia')}
                >
                    <Text style={styles.botaoVoltar}>Voltar a Tela de Login ??</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        backgroundColor: 'brown',
        fontSize: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        color: 'black'
    },
    titulo1:{
        color: 'black',
        textAlign: 'center',
        fontSize: 35,
        backgroundColor: 'blue',
        marginTop: 20
    },
    SubTitulo:{
        color: 'purple',
        textAlign: 'center',
        fontSize: 35,
        backgroundColor: 'black',
        borderColor:'red',
        borderWidth: 5,
        marginTop: -10,
        margin: -11,
        padding: 5,
        paddingHorizontal: 100,
        fontWeight: 'bold'
    },
    container: {
        fontSize: 70,
        padding: 10,
        backgroundColor: 'red',
        fontWeight: 'bold',
        color: 'brown',
        textAlign: 'center',
        margin: 0,
        marginTop: 60
    },
    button: {
        borderWidth: 5, // Grossura das bordas da caixa de texto
        borderColor: 'cyan',
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 13,
        borderRadius: 30,
        alignItems: 'center'
    },
    textoBotao: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    botaoVoltar: {
        color: 'black',
        fontSize: 30,
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
export default TelaPrincipal;
