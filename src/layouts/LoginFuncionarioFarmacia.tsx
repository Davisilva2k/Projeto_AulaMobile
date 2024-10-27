import { Alert, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import ExercicioNota from "../components/ExercicioNota";
import { useState } from "react";
import HomeNavigator, { LoginFarmProps, LoginProps } from "../navigation/HomeNavigator";
import auth from "@react-native-firebase/auth"

const LoginFarmacia = (props: LoginFarmProps) => {
    //variável
    let url = 'https://reactnative.dev/docs/assets/p_cat2.png';
    //O retorno da função é o que será construído em tela

    // States para mostra nome e email

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function logar() {
        if (verificarCampos()) {
            auth()
                .signInWithEmailAndPassword(email, senha)
                .then(() => {
                    props.navigation.navigate('TelaPrincipal')
                })
                .catch((erro) => tratarErros(String(erro)))

        }
    }

    function verificarCampos() {
        if (email == '') {
            Alert.alert(" Email em branco, digite um email")
            return false
        }
        if (senha == '') {
            Alert.alert(" Senha em branco, digite uma senha")
            return false
        }
        return true
    }
    function tratarErros(erro: string) {
        console.log(erro);

        if (erro.includes("[auth/invalid-email]")) {
            Alert.alert(" Email invalido", "Digite um email válido")
        } else if (erro.includes("[ INVALID_LOGIN_CREDENTIALS")) {
            Alert.alert("Login ou senha incorretos", "")
        } else if (erro.includes("[auth/invalid-credential")) {
            Alert.alert(" Login ou senha incorretos", "")
        } else {
            Alert.alert("Erro", erro)
        }
    }


    function exibirMensagem() {
        Alert.alert('Dados', 'Email: ' + email + '\nSenha: ' + senha);
        props.navigation.navigate('TelaPrincipal');
    }

    function redefinirSenha() {
        if (email == '') {
            Alert.alert(" Email em branco", "Preencha o email")
            return
        }
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redeinir senha", "Enviamos um email para você"))
            .catch((error) => console.log(error))
    }


    return (

        <ImageBackground
            source={require('..//images/LoginFarmacia.jpg')}
            style={{ flex: 1 }}
        >
            <ScrollView>

                {/* TITULO DO CABEÇALHO  */}
                <Text style={styles.tituloCabecalho}>Seja Bem Vindo</Text>

                <View style={styles.container}>

                    {/* IMAGEM ABAIXO DO CABEÇALHO (CORAÇÃO) */}
                    <Image
                        source={require('..//images/heart\.png')}
                        style={styles.imagem_200}
                    />

                    {/* TITULO DO CAMPO DE TEXTO DE EMAIL */}
                    <Text style={styles.titulo5}> EMAIL</Text>

                    {/* CAMPO DE TEXTO DE EMAIL */}
                    <TextInput
                        style={[styles.caixa_texto4, styles.largura_70]}
                        onChangeText={(text) => { setEmail(text) }}
                        placeholder="Digite seu Email"
                        placeholderTextColor="black"

                    />

                    {/* TITULO DO CAMPO DE TEXTO SENHA */}
                    <Text style={styles.titulo5}>SENHA</Text>

                    {/* CAMPO DE TEXTO DE SENHA */}
                    <TextInput
                        style={[styles.caixa_texto4, styles.largura_70]}
                        onChangeText={(text) => { setSenha(text) }}
                        placeholder="Digite sua Senha"
                        placeholderTextColor="black"

                    />

                    {/* BOTAO DE ENTRAR */}

                    <View style={styles.botoesContainer}>
                        <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                            onPress={() => { logar() }}>

                            <Text style={styles.tituloBotao}> Entrar </Text>
                        </Pressable>

                        {/* BOTAO DE CADASTRAR  */}

                        <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                            onPress={() => { props.navigation.navigate('CadastroFuncionarioFarmacia'); }}>
                            <Text style={styles.tituloBotao}> Cadastrar-se </Text>
                        </Pressable>

                        {/* BOTAO DE REDEFINIR SENHA */}

                        <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.8 } : null]}
                            onPress={() => { redefinirSenha() }}>
                            <Text style={styles.tituloBotao}>Esqueceu a Senha? </Text>

                        </Pressable>

                    </View>

                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 20 }}>
                </View>



            </ScrollView>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    tituloBotao: { 
        fontSize: 39,
        fontWeight: 'bold',
        color: 'orange',
        textAlign: 'center'
    },
    tituloCabecalho: {
        fontSize: 60,
        padding: 20,
        backgroundColor: 'lightblue',
        borderRadius: 20,
        fontWeight: 'bold',
        color: 'brown',
        textAlign: 'center',
        margin: 15
    },
    largura_70: {
        width: '75%',
        borderRadius: 20
    },

    imagem_200: {
        width: 190,
        height: 190
    },
    botoesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    container: {
        alignItems: 'center',
        textAlign: 'center'
    },

    titulo5: {
        fontSize: 35,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'black',
    },
    titulo6: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white'
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'purple',
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginTop: 15,
        borderRadius: 20,
        alignItems: 'center'
    },
    caixa_texto4: {
        color: 'black',
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 4,
        fontWeight: 'bold',
        borderColor: 'black',
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'white',
    },
});

// EXPORTAÇAÕ PARA O HomeNavigator
export default LoginFarmacia; 