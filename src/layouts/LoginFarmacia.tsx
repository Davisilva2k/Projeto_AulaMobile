import { Alert, Image, ImageBackground, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import ExercicioNota from "../components/ExercicioNota";
import { useState } from "react";
import { LoginFarmProps, LoginProps } from "../navigation/HomeNavigator";
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
                <Text style={styles.titulo4}>Seja bem Vindo</Text>

                <View style={styles.container}>
                    <Text>Seja Bem Vindo</Text>

                    <Image
                        source={require('..//images/heart\.png')}
                        style={styles.imagem_200}
                    />

                    <Text style={styles.titulo5}>Digite o Login</Text>
                    <TextInput
                        style={[styles.caixa_texto, styles.largura_70]}
                        onChangeText={(text) => { setEmail(text) }}
                        placeholder="Digite seu login"
                        placeholderTextColor="#888"




                    />

                    <Text style={styles.titulo5}>Digite a Senha</Text>
                    <TextInput
                        style={[styles.caixa_texto, styles.largura_70]}
                        onChangeText={(text) => { setSenha(text) }}
                        placeholder="Digite seu login"
                        placeholderTextColor="#888"

                    />             

                    <View style={styles.botoesContainer}>
                        <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                            onPress={() => { logar() }}>

                            <Text style={styles.titulo3}> Entrar </Text>
                        </Pressable>

                        <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                            onPress={() => { props.navigation.navigate('TelaCadastro'); }}>
                            <Text style={styles.titulo3}> Cadastrar </Text>
                        </Pressable>

                        <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                            onPress={() => { redefinirSenha() }}>
                            <Text style={styles.titulo3}>Esqueceu a Senha?</Text>

                        </Pressable>

                    </View>

                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 20 }}>
                    <Text style={styles.titulo2}>Todos direitos à Alex.Silva e Davi.Graff</Text>
                </View>



            </ScrollView>
        </ImageBackground>



    );
};

export default LoginFarmacia;