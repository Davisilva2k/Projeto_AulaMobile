import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Modal, TouchableOpacity } from 'react-native';

interface Paciente {
  nome: string;
  idade: string;
  descricao: string;
  gravidade: string;
}

const App: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [idade, setIdade] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [gravidade, setGravidade] = useState<string>('1');
  const [lista, setLista] = useState<Paciente[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [pacienteAdicionado, setPacienteAdicionado] = useState<Paciente | null>(null);

  const cores: Record<string, string> = {
    1: 'blue',
    2: 'green',
    3: 'yellow',
    4: 'orange',
    5: 'red',
  };

  

  const adicionarPaciente = () => {
    if (nome && idade && descricao && gravidade) {
      const novoPaciente: Paciente = { nome, idade, descricao, gravidade };
      setLista((antigaLista) => [...antigaLista, novoPaciente]);
      setPacienteAdicionado(novoPaciente);
      setModalVisible(true);

      // Limpa os campos após adicionar
      setNome('');
      setIdade('');
      setDescricao('');
      setGravidade('1');
    }
  };

  const limparLista = () => {
    setLista([]);
  };

  const renderPaciente = ({ item }: { item: Paciente }) => (
    <View style={[styles.paciente, { backgroundColor: cores[item.gravidade] }]}>
      <Text>Nome: {item.nome}</Text>
      <Text>Idade: {item.idade}</Text>
      <Text>Descrição: {item.descricao}</Text>
      <Text>Gravidade: {item.gravidade}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Pacientes</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição da Enfermidade"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />
      <TextInput
        placeholder="Grau de Gravidade (1-5)"
        value={gravidade}
        onChangeText={setGravidade}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Adicionar Paciente" onPress={adicionarPaciente}/>
      
      <Button title="Limpar Lista" onPress={limparLista} color="red" />

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPaciente}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Paciente Adicionado</Text>
            {pacienteAdicionado && (
              <>
                <Text>Nome: {pacienteAdicionado.nome}</Text>
                <Text>Idade: {pacienteAdicionado.idade}</Text>
                <Text>Descrição: {pacienteAdicionado.descricao}</Text>
                <Text>Gravidade: {pacienteAdicionado.gravidade}</Text>
              </>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  paciente: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
