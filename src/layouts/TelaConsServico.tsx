import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Alert, FlatList, Pressable, Text, View} from 'react-native';
import {styles} from '../styles/styles';
import {ConsServicoProps} from '../navigation/HomeNavigator';
import {Servico} from '../type/Servico';

const TelaConsServico = (props: ConsServicoProps) => {
  const [servicos, setServicos] = useState<Servico[]>([]);
  
  // Buscar os dados quando abrir a tela
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Servicos')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as unknown as Servico[];

        setServicos(data);
      });

    return () => unsubscribe();
  }, []);

  function deletarServico(id: string) {
    firestore()
      .collection('Servicos')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert('Serviço', 'Removido com sucesso');
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Erro', 'Não foi possível remover o serviço');
      });
  }

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo1}>Serviços</Text>
      <FlatList
        data={servicos}
        keyExtractor={item => item.servicoId}
        renderItem={({item, index}) => (
          <ItemServico
            numeroOrdem={index + 1}
            serv={item}
            onDeletar={deletarServico}
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

type ServicoProps = {
  numeroOrdem: number;
  serv: Servico;
  onDeletar: (id: string) => void;
};

const ItemServico = ({numeroOrdem, serv, onDeletar}: ServicoProps) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={{fontSize: 20, color: 'black'}}>Id: {serv.servicoId}</Text>
        <Text style={{fontSize: 20, color: 'black'}}>Nome do cliente: {serv.nomeCliente}</Text>
        <Text style={{fontSize: 20, color: 'black'}}>Serviço: {serv.tipoServico}</Text>
        <Text style={{fontSize: 20, color: 'black'}}>Data: {serv.data}</Text>
        <Text style={{fontSize: 20, color: 'black'}}>Preço: R$ {serv.preco}</Text>
      </View>
      <View style={{marginTop: 10}}>
        <Pressable onPress={() => onDeletar(serv.servicoId)}>
          <Text style={[styles.card_texto, {borderWidth: 2, borderRadius: 8, paddingHorizontal: 20}]}>Excluir serviço</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TelaConsServico;
