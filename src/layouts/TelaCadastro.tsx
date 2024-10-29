import { useState } from "react";
import { Alert, Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { CadastroProps } from "../navigation/HomeNavigator";
import { styles } from "../styles/styles";
import auth from "@react-native-firebase/auth"
const TelaCadastro = (props: CadastroProps) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarsenha] = useState('');

    function cadastrar() {
        if (verificarCampos()) {
            auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(() => {
                Alert.alert( " Conta", " Cadastrada com sucesso")
                props.navigation.goBack();
            })
            .catch((Error) => {tratarErros(String(Error))});
        }

    }

    function verificarCampos(): boolean {
        if (email == '') {
            Alert.alert(" Email em branco ", " Digite um email ")
            return false;
        }
        if (senha == '') {
            Alert.alert(" Senha em branco", " Digite uma senha de pelo menos 6 digitos")
            return false;
        }
        if ( confirmarSenha == '') {
            Alert.alert(" Confirmação de senha em branco", " Digite a confirmção de senha corretamente")
            return false;
        }
        if (senha != confirmarSenha) {
            Alert.alert( " As senhas não são iguais"," Digite a confirmação de senha corretamente")
        }
        return true;
    }

    function tratarErros(erro: string) {
        console.log(erro);
        if (erro.includes("[auth/invalid-email]")) {
            Alert.alert(" Email inválido", " Digite um email válido")
        }else if (erro.includes("[auth/weak-password")) {
            Alert.alert(" Senha Fraca", " A senha digitada é fraca. A senha deve conter pelo menos 6 digitos. ")
        }else if (erro.includes("[auth/email-already-in-use]")) {
            Alert.alert(" Email em uso"," O email inserido ja foi cadastrado ja foi cadastrado em outra  conta")
        }else{
            Alert.alert(" Erro", erro)
        }
        
    }

    function exibirCadastro() {
        if (senha == confirmarSenha) {
            Alert.alert('Dados',
                'Email: ' + email +
                '\nSenha: ' + senha +
                '\nConfirmar Senha:' + confirmarSenha
            )
            props.navigation.navigate('TelaLogin');
        } else {
            Alert.alert('Senha Diferente');
        }
    }


    return (



        <ScrollView>
            <Text style={styles.tituloPreto1}>Cadastre-se</Text>

            <View style={styles.container}>
                <Text>Seja Bem Vindo</Text>

                <Image
                    source={require('..//images/avatar.png')}
                    style={styles.imagem_200}
                />

                <Text style={styles.tituloPreto2}>Digite o Login</Text>
                <TextInput
                    style={[styles.caixa_texto1, styles.largura_70]}

                    defaultValue="Digite aqui o Login"

                    onChangeText={(text) => {
                        //Exibe o Nome no terminal
                        console.log(text);
                        setEmail(text);
                    }
                    }
                />

                <Text style={styles.tituloPreto2}>Digite a Senha</Text>
                <TextInput
                    style={[styles.caixa_texto2, styles.largura_70]}
                    defaultValue="Digite aqui a Senha"

                    onChangeText={(text) => {
                        //Exibe o Nome no terminal
                        console.log(text);
                        setSenha(text);
                    }
                    }
                />

                <Text style={styles.tituloPreto2}>Confirmar Senha</Text>
                <TextInput
                    style={[styles.caixa_texto2, styles.largura_70]}
                    defaultValue="Confirmar Senha"

                    onChangeText={(text) => {
                        //Exibe o Nome no terminal
                        console.log(text);
                        setConfirmarsenha(text);
                    }
                    }
                />

                <View style={styles.botoesContainer}>
                   


                    <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                        onPress={() => { cadastrar() }}>
                        <Text style={styles.tituloPreto3}> Salvar </Text>
                    </Pressable>


                    <Pressable
                        style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                        onPress={() => { props.navigation.goBack() }}>
                        <Text style={styles.tituloPreto3}>Cancelar</Text>
                    </Pressable>


                </View>

            </View>

        </ScrollView>


    );
}
export default TelaCadastro;






