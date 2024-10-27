import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SecundariaProps } from '../navigation/HomeNavigator';

const TelaSecundaria = (props: SecundariaProps) => {

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => 
               { props.navigation.navigate('Apresentacao', { valor: 1 })}}>         
                <Text style={styles.buttonText}>Exemplo Cálculo</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => 
               { props.navigation.navigate('Apresentacao', { valor: 2 })}}>         
                <Text style={styles.buttonText}>Exemplo Evento</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => 
               { props.navigation.navigate('Apresentacao', { valor: 3 })}}>         
                <Text style={styles.buttonText}>Exemplo State</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => 
               { props.navigation.navigate('Apresentacao', { valor: 4 })}}>         
                <Text style={styles.buttonText}>Exemplo Style View</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => 
               { props.navigation.navigate('Apresentacao', { valor: 5 })}}>         
                <Text style={styles.buttonText}>Exemplo Construção Condicional</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => 
               { props.navigation.navigate('Apresentacao', { valor: 6 })}}>         
                <Text style={styles.buttonText}>Exemplo Tela Cadastro Paciente</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => 
               { props.navigation.navigate('Apresentacao', { valor: 7 })}}>         
                <Text style={styles.buttonText}>Tela Interativa</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => 
               { props.navigation.navigate('Apresentacao', { valor: 8 })}}>         
                <Text style={styles.buttonText}>Exemplo Tela Cadastro Produtos</Text>
            </Pressable>

            <Pressable
                style={[styles.button, { marginTop: 20 }]}
                onPress={() => props.navigation.goBack()}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default TelaSecundaria;
