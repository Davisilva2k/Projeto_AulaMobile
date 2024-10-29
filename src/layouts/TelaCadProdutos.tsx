import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import firestore from "@react-native-firebase/firestore";
import { ProdutoProps } from '../navigation/HomeNavigator';
import { Produtos } from '../components/type/produtos';
import { styles } from '../styles/styles';


const TelaCadProdutos = (props: ProdutoProps) => {
    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [preco, setPreco] = useState('');

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
            Alert.alert("Código de barras em branco", "Digite um código de barras");
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

        return true; // Adicionando o retorno para indicar que todos os campos estão válidos
    }

    return (
        <View>
            <Text>Nome</Text>
            <TextInput
                style={styles.caixa_texto2}
                onChangeText={setNome}
            />

            <Text>Código de Barras</Text>
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

            <Pressable
                style={styles.botao}
                onPress={cadastrar}
            >
                <Text style={styles.botao}>Cadastrar</Text> 
            </Pressable>
        </View>
    );
}

export default TelaCadProdutos;
