import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Alert, FlatList, Pressable, Text, View} from 'react-native';
import {styles} from '../styles/styles';
import {ConsClienteProps} from '../navigation/HomeNavigator';
import { Cliente } from '../components/type/Cliente';

const TelaConsCliente = (props: ConsClienteProps) => {
  const [cliente, setCliente] = useState([] as Cliente[]);

  //Buscar os dados quando abrir a tela

  useEffect(() => {
    const subscribe = firestore()
      .collection('Cliente')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as Cliente[];

        setCliente(data);
      });
    return () => subscribe();
  }, []);

  function deletarProduto(id: string) {
    firestore()
      .collection('Cliente')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert('Cliente', 'Removido com sucesso');
      })
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo2}>Clientes</Text>
      <FlatList
        data={cliente}
        renderItem={info => (
          <ItemProduto
            numeroOrdem={info.index + 1}
            serv={info.item}
            onDeletar={deletarProduto}
          />
        )}
      />

      <View style={styles.centralizar}>
        <Pressable
          style={[styles.botao, {width: '40%'}]}
          onPress={() => props.navigation.goBack()}>
          <Text style={styles.texto_botao}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
};

type ClienteProps = {
  numeroOrdem: number;
  serv: Cliente;
  onDeletar: (id: string) => void;
};

const ItemProduto = (props: ClienteProps) => {
  return (
    <View style={styles.card}>
      <View>

        <Text style={{fontSize: 20, color: 'black'}}>ID: {props.serv.id}</Text>

        <Text style={{fontSize: 20, color: 'black'}}>Nome do cliente {props.serv.nome}</Text>

        <Text style={{fontSize: 20, color: 'black'}}>CPF {props.serv.cpf}</Text>
      </View>
      <View style={[styles.card_texto, {borderWidth: 2,borderRadius: 8,paddingHorizontal: 100}]}>
        <Pressable onPress={() => props.onDeletar(props.serv.id)}>
          <Text style={styles.card_texto}> Excluir cliente </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default TelaConsCliente;
