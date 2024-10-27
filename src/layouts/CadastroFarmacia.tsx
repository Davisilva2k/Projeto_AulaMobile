import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { CadFarmaciaProps } from "../navigation/HomeNavigator";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

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

            <Text style={styles.titulo4}>Cadastro Usuário</Text>

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
                <Text style={styles.desc_botao}>Salvar cadastro</Text>
            </Pressable>

            <Pressable
                style={styles.botao}
                onPress={() => { props.navigation.navigate("LoginFarmacia") }}>
                <Text style={{ fontSize: 40 }}>voltar</Text>
            </Pressable>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    container_Nome: {
        flex: 2,

    },
    titulo_caixa_texto: {
        fontSize: 25,
        color: 'black',
        margin: 10,
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white',
        fontSize: 23
    },
    botao: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    desc_botao: {
        textAlign: 'center',
        fontSize: 26,
        color: 'white',
        height: 30
    },
    painel_imagem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem: {
        width: 200,
        height: 200,
        resizeMode: "center"
    },

    titulo4: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
});
export default CadastroFarmacia;