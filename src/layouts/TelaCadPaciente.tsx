import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

interface Paciente {
  nome: string;
  idade: string;
  descricao: string;
  gravidade: number; // Gravidade como número
}

const App: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [idade, setIdade] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [gravidade, setGravidade] = useState<string>('1');
  const [lista, setLista] = useState<Paciente[]>([]);

  const cores: Record<number, string> = {
    1: 'blue',
    2: 'green',
    3: 'yellow',
    4: 'orange',
    5: 'red',
  };

  const adicionarPaciente = () => {
    if (nome && idade && descricao && gravidade) {
      const novoPaciente: Paciente = { 
        nome, 
        idade, 
        descricao, 
        gravidade: parseInt(gravidade, 10) // Converte gravidade para número
      };
      setLista((antigaLista) => [...antigaLista, novoPaciente]);

      console.log("Paciente adicionado:", novoPaciente); // Verificar os dados adicionados

      // Limpa os campos após adicionar
      setNome('');
      setIdade('');
      setDescricao('');
      setGravidade('1');
    } else {
      console.log("Por favor, preencha todos os campos.");
    }
  };

  const renderPaciente = ({ item }: { item: Paciente }) => {
    console.log("Paciente:", item); // Verificar os dados do paciente
    return (
      <View style={[styles.paciente, { backgroundColor: cores[item.gravidade] }]}>
        <Text>Nome: {item.nome}</Text>
        <Text>Idade: {item.idade}</Text>
        <Text>Descrição: {item.descricao}</Text>
        <Text>Gravidade: {item.gravidade}</Text>
        <Text style={{ color: cores[item.gravidade] }}>
          {item.gravidade === 1 && 'Leve'}
          {item.gravidade === 2 && 'Menos grave'}
          {item.gravidade === 3 && 'Urgência'}
          {item.gravidade === 4 && 'Muito urgente'}
          {item.gravidade === 5 && 'Emergência'}
        </Text>
      </View>
    );
  };

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
      <Button title="Adicionar Paciente" onPress={adicionarPaciente} />

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPaciente}
      />
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
});

export default App;
