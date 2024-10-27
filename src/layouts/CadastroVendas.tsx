import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const CadastroVendas = () => {
  const [cliente, setCliente] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const finalizarVenda = () => {
    if (!cliente || !produto || !quantidade) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }
    console.log('Venda finalizada:', { cliente, produto, quantidade });
    setCliente('');
    setProduto('');
    setQuantidade('');
    Alert.alert('Sucesso', 'Venda finalizada com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cliente</Text>
      <TextInput
        style={styles.input}
        value={cliente}
        onChangeText={setCliente}
        placeholder="Digite o nome do cliente"
      />
      <Text style={styles.label}>Produto</Text>
      <TextInput
        style={styles.input}
        value={produto}
        onChangeText={setProduto}
        placeholder="Digite o nome do produto"
      />
      <Text style={styles.label}>Quantidade</Text>
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
        placeholder="Digite a quantidade"
        keyboardType="numeric"
      />
      <Button title="Finalizar Venda" onPress={finalizarVenda} />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#e0ffe0',
    },
    label: {
      marginBottom: 5,
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 10,
      marginBottom: 15,
    },
  });
  
  export default CadastroVendas;