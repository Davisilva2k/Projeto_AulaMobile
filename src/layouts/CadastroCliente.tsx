import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { CadProdProps, ClienteProps } from '../navigation/HomeNavigator';
import { Produtos } from '../components/type/produtos';
import firestore from "@react-native-firebase/firestore"
import { Cliente } from '../components/type/Cliente';
import CadastroProdutos from './CadastroProduto';


const CadastroClientes = (props: ClienteProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');



    function cadastrar() {
        if (verificarCampos()) {
            let cliente = {
                nome,
                cpf,
                telefone,
            } as Cliente;

            firestore() // Aqui chamo o banco e add o produto.
                .collection('produtos')
                .add(cliente)
                .then(() => {
                    Alert.alert("Cliente", "Cadastrado com sucesso");
                    props.navigation.goBack();
                })
                .catch((error) => console.log(error));
        }
    }

    function verificarCampos() {
        if (!nome) {
            Alert.alert("Nome em branco", "Digite um nome");
            return false;
        }
        if (!cpf) {
            Alert.alert("Cpf", "Digite um cpf");
            return false;
        }
        if (!telefone) {
            Alert.alert("Telefone em branco", "Digite um telefone");
            return false;
        }



        return true;
    }

    return (
        <ImageBackground
            source={require('../images/farmacia3.png')}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>

                <Text style={styles.titulo4}>Cadastro Cliente</Text>

                <View>
                    <Text>Nome</Text>
                    <TextInput
                        style={styles.caixa_texto2}
                        onChangeText={setNome}
                    />

                    <Text>Cpf</Text>
                    <TextInput
                        maxLength={14}
                        style={styles.caixa_texto2}
                        onChangeText={setCpf}
                    />

                    <Text>Telefone</Text>
                    <TextInput
                        maxLength={14}
                        style={[styles.caixa_texto2, { width: "40%" }]}
                        onChangeText={setTelefone}
                    />

                    <View style={{ alignItems: 'center', }}>

                        <Pressable
                            style={styles.botao1}
                            onPress={cadastrar}
                        >
                            <Text style={styles.botao1}>Cadastrar</Text>
                        </Pressable>

                        <Pressable
                            style={styles.button}
                            onPress={() => props.navigation.navigate('CadastroProdutos')}
                        >
                            <Text style={styles.buttonText}>Cadastrar Produto </Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({

    caixa_texto2: {
        backgroundColor: 'white',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black',
        alignItems: 'center',
        margin: 3
    },

    botao1: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
    },
    container: {

    },
    button: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
    },
    buttonText: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
    },
    titulo4: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'white',
        textAlign: 'center'


    }

});

export default CadastroClientes;



