import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { CadFarmaciaProps } from "../navigation/HomeNavigator";
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const CadastroFarmacia = (props: CadFarmaciaProps) => {
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');

    function Cadastrar() {
        auth()
            .createUserWithEmailAndPassword(Email, Senha)
            .then(() => {
                Alert.alert("cadastro Feito com Sucesso !!")
                props.navigation.goBack();
            })
            .catch((error) => (tratarErros(String(error))));
    }
    function tratarErros(erro: string) {
        console.log(erro);
        if (erro.includes("[auth/invalid-email]")) {
            Alert.alert("Email inválido", "Digite um Email válido")
        } else if (erro.includes("[auth/invalid-password]")) {
            Alert.alert("Senha fraca ", "Digite uma senha mais forte ")
        } else if (erro.includes("[auth/email-already-in-use]")) {
            Alert.alert("Email ja em uso", "O email cadastrado ja existe em outra conta ")
        } else {
            Alert.alert("Erro", erro)
        }
    }
    function verificarCampos(): boolean {
        if (Email == '') {
            Alert.alert("email em branco", "Digite um email")
            return false;
        }
        if (Senha == '') {
            Alert.alert("campo de de Data de nascimento em branco ", "Digite sua Data de nascimento ")
            return false;
        }
        return true;
    }
    function exibirMensagem() {
        Alert.alert(
            'Dados',

            'Nome: ' + Email +
            '\Senha: ' + Senha
        )
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('..//images/LoginFarmacia.jpg')}
                style={{ flex: 1 }}
            >
                <Text style={styles.titulo4}>Cadastrar Funcionário</Text>

                <View style={styles.container_Nome}>
                    <View style={{ flex: 1, alignItems: 'center', }}>
                        {/* // titulo do EMAIL */}
                        <Text
                            style={styles.titulo_caixa_texto}> EMAIL
                        </Text>

                        {/* caixa de texto do EMAIL */}
                        <TextInput
                            style={styles.caixa_texto}
                            onChangeText={(text) => setEmail(text)}
                        />

                        {/* titulo de SENHA  */}
                        <Text
                            style={styles.titulo_caixa_texto}> SENHA
                        </Text>

                        {/* Caixa de texto de SENHA */}
                        <TextInput
                            style={styles.caixa_texto}
                            onChangeText={(text) => setSenha(text)}
                        />
                    </View>


                </View>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                    onPress={() => { Cadastrar() }}
                >
                    {/* TITULO DO BOTÃO DE SALVAR CADASTRO DO FUNCIONARIO  */}

                    <Text style={styles.desc_botao}>Salvar cadastro</Text>
                </Pressable>

                <Pressable
                    style={styles.botao}
                    onPress={() => { props.navigation.navigate("LoginFuncionarioFarmacia") }}>

                        {/* TIUTLO DO BOTÃO VOLTAR PARA A TELA DE LOGIN DO FUNCIONARIO  */}
                    <Text style={{ fontSize: 40 }}>voltar</Text>
                </Pressable>
            </ImageBackground>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, // AJUDA A TELA A NÃO FICAR BAGUNÇADA
    },
    container_Nome: {
        flex: 2, // ARRUMA OS TITULOS DAS CAIXA DE TEXTOS

    },
    titulo_caixa_texto: {
        fontSize: 25,  //TAMANHO DA FONTE DO TITULO  DAS CAIXA DE TEXTO
        color: 'black', //COR DA FONTE DO TITULO DAS CAIXA DE TEXTO
        margin: 10, //DISTANCIA DE UMA CAIXA DE TEXTO A OUTRA
    },
    largura_70: { //ARRUMA A IMAGEM DE FUNDO 
        width: '75%', 
        borderRadius: 20
    },

    imagem_200: {//ARRUMA A IMAGEM DE FUNDO 
        width: 190,
        height: 190
    },
    caixa_texto: {
        color: 'black', //COR DA FONTE DA CAIXA DE TEXTO
        width: '75%', //LARGURA DA CAIXA DE TEXTO 
        borderWidth: 4, //GROSSURA DAS BORDA DA CAIXA DE TEXTO
        borderRadius: 10, //AJUDA  A DEIXAR AS BORDAR REDONDAS 
        margin: 4, //DISTANCIA DO TITULO A CAIXA DE TEXTO
        backgroundColor: 'white', //COR DA CAIXA DE TEXTO
        fontSize: 24 // TAMANHO DA FONTE DA CAIXA DE TEXTO
    },
    botao: {
        backgroundColor: 'red', //COR DOS BOTÃO
        padding: 5, //TAMANHO DOS BOTAO
        borderRadius: 5, // DEIXA A BORDA REDONDA DOS BOTAO
        alignSelf: 'flex-end',  
        marginTop: 7, //ESPACO DE UM BOTAO A OUTRO
    },
    desc_botao: {
        textAlign: 'center', //DEIXA O O TEXTO DO BOTAO CENTRALIZADO
        fontSize: 26, //TAMANHO DA FONTE DO BOTAO
        color: 'white', //COR DAS LETRAS DO BOTAO
        height: 30 //GROSSURA DO BOTAO VERTICALMENTE 
    },
    titulo4: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
});
export default CadastroFarmacia;