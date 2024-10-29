import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import firestore from "@react-native-firebase/firestore";
import { AlteracaoProps, ProdutoProps } from '../navigation/HomeNavigator';
import { Produtos } from '../components/type/produtos';
import { styles } from '../styles/styles';


const TelaDeAlteracao = (props: AlteracaoProps) => {
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [preco, setPreco] = useState('');



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

    return true;
  }

  //Carrrega os states com os dados do produto do banco de dados
  //Usando o id que recebeu como propriedade ao navegar para essa tela de alteração
  async function carregar() {
    const resultado = await firestore()
      .collection('produtos')
      .doc(codigo)
      .get();

    const produto = {
      id: resultado.id,
      ...resultado.data()
    } as Produtos;

    setNome(produto.nome);
    setCodigo(produto.codigo);
    setPreco(produto.preco.toString());
  };
  //chamar a função de carregar

  useEffect(() => {
    carregar();
  }, []);
 
  function alterar() {
    if (verificarCampos()) {
      let produto = {
        nome: nome,
        codigo: codigo,
        preco: Number.parseFloat(preco)
      } as Produtos;

      firestore()
        .collection('produtos')
        .doc(codigo)
        .update(produto)
        .then(() => {
          Alert.alert("Produto", "Alterado com sucesso")
          props.navigation.goBack();
        })
        .catch((error) => console.log(error));
    }
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
        onPress={alterar}
      >
        <Text style={styles.botao}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

export default TelaDeAlteracao;
