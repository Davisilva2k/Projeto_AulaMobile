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
                    <Text style={styles.botao}>voltar</Text>
                </Pressable>
            </ImageBackground>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ajuda a tela a não ficar bagunçada
    },
    container_Nome: {
        flex: 2, // Arruma os títulos das caixas de texto
    },
    titulo_caixa_texto: {
        fontSize: 40, // Tamanho da fonte do título das caixas de texto
        color: 'black', // Cor da fonte do título das caixas de texto
        fontWeight: 'bold',
        margin: 70, // Distância de uma caixa de texto a outra
        padding: 12,
    },
    largura_70: {
        // Arruma a imagem de fundo
        width: '75%',
        borderRadius: 20,
    },
    imagem_200: {
        // Arruma a imagem de fundo
        width: 190,
        height: 190,
    },
    caixa_texto: {
        color: 'black', // Cor da fonte da caixa de texto
        width: '75%', // Largura da caixa de texto
        borderWidth: 5, // Grossura das bordas da caixa de texto
        borderRadius: 10, // Ajuda a deixar as bordas arredondadas
        margin: -60, // Distância do título à caixa de texto
        backgroundColor: 'white', // Cor da caixa de texto
        fontSize: 22, // Tamanho da fonte da caixa de texto
        padding: 12,
    },
    botaoContainer: {
        marginTop: 10, // Adiciona espaço entre as caixas de texto e os botões
        alignItems: 'center', // Centraliza os botões
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingVertical: 8,
        marginTop: 20,
        borderRadius: 20,
        alignItems: 'center',
        fontSize: 40,
        width: '75%',
    },
    botaoVoltar:{
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingVertical: 8,
        marginTop: 45,
        borderRadius: 20,
        alignItems: 'center',
        fontSize: 40,
        width: '75%',
    },
    desc_botao: {
        textAlign: 'center', // Deixa o texto do botão centralizado
        fontSize: 36, // Tamanho da fonte do botão
        color: 'white', // Cor das letras do botão
    },
    titulo4: {
        fontSize: 70,
        padding: 15,
        backgroundColor: 'gray',
        borderRadius: 40,
        color: 'black',
        textAlign: 'center',
        margin: -20,
    },
});
export default CadastroFarmacia;