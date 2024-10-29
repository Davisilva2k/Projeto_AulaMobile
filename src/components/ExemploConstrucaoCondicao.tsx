import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";

const ExemploState = () => {
    // Funciona para guardar o texto do campo
    const [frase, setFrase] = useState('bom dia');
    const [nome, setNome] = useState('');

    //Não funciona para guardar o texto do campo
    let fraseVariavel = '' as string;

    function exibirMensagem() {
        Alert.alert('Valores', 'Frase:' + frase + '\nFrase Varivel:' + fraseVariavel)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            <Text
                style={{ fontSize: 40 }}>
                Frase
            </Text>
            <TextInput
                style={[styles.caixa_texto, { width: 150 }]}
                onChangeText={(text) => {
                    //Exibe o texto no terminal
                    console.log(text);
                    setFrase(text);
                    //Guarda na variavel (Não funciona)
                    fraseVariavel = text
                }} />

            <Pressable
                style={(state) => [styles.botao, state.pressed && styles.click]}
                // Evento do click do botão
                onPress={() => { exibirMensagem() }}>
                <Text style={styles.texto_botao}>Entrar</Text>
            </Pressable>

            {
                // Se o texto tiver mais de 10 caracteres
                // Irá construir o texto "Isso é verdade" na tela
                //frase.length >= 10 &&
               // <text style={{ fontSize: 40 }}>Isso é verdade</text>
            }
            {
                frase.length >= 10 ?
                    <Text style={{ fontSize: 40 }}>Condição é verdade</Text>
                    
                    :
                    (frase.length > 0 ?
                    <Text style={{ fontSize: 40 }}>Condição e falsa</Text>
                    :
                    <Text style={{ fontSize: 40 }}>Campo vazio</Text>
                    )
                
            }
        </View>
    )

}
export default ExemploState;