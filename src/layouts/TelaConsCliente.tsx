
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { ConsClienteProps } from '../navigation/HomeNavigator';
import { Clientes } from '../components/type/Cliente';

const TelaConsCliente = (props: ConsClienteProps) => {
    const [cliente, setCliente] = useState([] as Clientes[]);
    const [searchTerm, setSearchTerm] = useState('');

    // Função para buscar os dados dos clientes
    const buscarClientes = () => {
        const subscribe = firestore()
            .collection('cliente')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                }) as unknown as Clientes[];
                setCliente(data);
            });
        return subscribe;
    };
    function deletarCliente(id: string) {
      firestore()
          .collection('cliente')
          .doc(id)
          .delete()
          .then(() => {
              Alert.alert("Cliente", "Removido com sucesso")
          })
          .catch((error) => console.log(error));
  }

    return (
        <View style={styles.tela}>
            <Text style={styles.titulo2}>Clientes</Text>

            {/* CAIXA DE TEXTO PARA PESQUISAR CLIENTE */}
            <TextInput 
                style={styles.caixa_texto} 
                placeholder="Digite aqui" 
                value={searchTerm} 
                onChangeText={setSearchTerm}
            />

            {/* QUANDO PRESSIONADO O BOTÃO LISTA OS CLIENTES CADASTRADOS */}

            <Button title="Buscar Clientes" onPress={buscarClientes} />

            {/* FUNÇÃO DE DELETAR */}
            <FlatList
                data={cliente}
                renderItem={info => (
                    <ItemCliente
                        numeroOrdem={info.index + 1}
                        serv={info.item}
                        onDeletar={deletarCliente}
                    />
                )}
                
                keyExtractor={(item) => item.nome}
            />
            <View style={styles.centralizar}>
                <Pressable
                    style={[styles.botao, { width: '50%' }]}
                    onPress={() => props.navigation.goBack()}
                >
                    <Text style={styles.texto_botao}>Voltar</Text>
                </Pressable>
            </View>
        </View>
    );
};

type ClienteProps = {
    numeroOrdem: number;
    serv: Clientes;
    onDeletar: (id: string) => void;
};

const ItemCliente = (props: ClienteProps) => {
    return (
        <View style={styles.card}>
            <View>
                <Text style={{ fontSize: 30, color: 'black' }}>Nome do cliente: {props.serv.nome}</Text>
                <Text style={{ fontSize: 30, color: 'black' }}>CPF: {props.serv.cpf}</Text>
            </View>
            <View style={[styles.card_texto, { borderWidth: 3, borderRadius: 10 }]}>
                <Pressable onPress={() => props.onDeletar(props.serv.id)}>
                    <Text style={styles.card_texto}>Excluir cliente</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centralizar: {
        alignItems: 'center',
    },
    card_texto: {
        fontSize: 30,
        backgroundColor: 'orange',
        color: 'black',
        borderColor: 'gray',
        width: 200,
        textAlign: 'center',
        marginVertical: 5,
    },
    tela: {
        flex: 1,
        backgroundColor: 'cyan',
    },
    titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
    },
    card: {
        borderWidth: 5,
        borderColor: 'red',
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'white',
        padding: 15, // Espaçamento interno
        shadowColor: "#000", // Sombra para Android
        shadowOffset: { width: 0, height: 2 }, // Sombra para iOS
        shadowRadius: 6, // Sombra para iOS
        elevation: 5, // Sombra para Android
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    texto_botao: {
        fontSize: 20,
        color: 'white',
    },
    caixa_texto: {
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'red',
        padding: 10,
        margin: 10,
    },
});
export default TelaConsCliente;