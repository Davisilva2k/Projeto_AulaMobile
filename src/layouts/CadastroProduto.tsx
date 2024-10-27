import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { CadProdProps } from '../navigation/HomeNavigator';
import { Produtos } from '../components/type/produtos';
import firestore from "@react-native-firebase/firestore"


const CadastroProdutos = (props: CadProdProps) => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [codigo, setCodigo] = useState('');



    function cadastrar() {
        if (verificarCampos()) {
            let produto = {
                nome,
                codigo,
                preco: Number.parseFloat(preco),
            } as Produtos;

            firestore() // Aqui chamo o banco e add o produto.
                .collection('produtos')
                .add(produto)
                .then(() => {
                    Alert.alert("Produto", "Cadastrado com sucesso");
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
        if (!codigo) {
            Alert.alert("Código em branco", "Digite um código");
            return false;
        }
        if (!preco) {
            Alert.alert("Preço em branco", "Digite um preço");
            return false;
        }

        let precoNumero = Number.parseFloat(preco);
        if (precoNumero <= 0) {
            Alert.alert("Preço incorreto", "Digite um preço maior do que zero");
            return false;
        }

        return true;
    }

    return (


        <ImageBackground
            source={require('../images/fundo2.jpg')}
            style={{ flex: 1 }}
        >

<Text style={styles.titulo4}>Cadastro Produto</Text>
            <View>
                <Text>Nome</Text>
                <TextInput
                    style={styles.caixa_texto2}
                    onChangeText={setNome}
                />

                <Text>Código</Text>
                <TextInput
                    maxLength={14}
                    style={styles.caixa_texto2}
                    onChangeText={setCodigo}
                />

                <Text>Preço</Text>
                <TextInput
                    maxLength={7}
                    style={[styles.caixa_texto2, { width: "40%" }]}
                    onChangeText={setPreco}
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
                        onPress={() => props.navigation.navigate('cadastroVendas')}
                    >
                        <Text style={styles.buttonText}>Cadastrar Venda</Text>
                    </Pressable>

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
    titulo4:{
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    buttonText: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
    },
    button: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
    }

});

export default CadastroProdutos;
