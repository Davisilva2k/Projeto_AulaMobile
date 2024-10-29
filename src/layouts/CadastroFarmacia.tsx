import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { CadFarmaciaProps } from "../navigation/HomeNavigator";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const CadastroFarmacia = (props: CadFarmaciaProps) => {
    const [Nome, setNome] = useState('');
    const [DataNasc, setDataNasc] = useState('');
    const [Cpf, setCpf] = useState('');

    function Cadastrar() {
        auth()
            .createUserWithEmailAndPassword(Cpf, DataNasc)
            .then(() => {
                Alert.alert("cadastro Feito com Sucesso !!")
                props.navigation.goBack();
            })
    }
    function verificarCampos(): boolean {
        if (Nome == '') {
            Alert.alert("email em branco", "Digite um email")
            return false;
        }
        if (DataNasc == '') {
            Alert.alert("campo de de Data de nascimento em branco ", "Digite sua Data de nascimento ")
            return false;
        }
        if (Cpf == '') {
            Alert.alert("Campo de cpf em branco ", "Digite seu Cpf")
        }
        return true;
    }
    function exibirMensagem() {
        Alert.alert(
            'Dados',
            'Nome: ' + Nome +
            '\DataNascimento: ' + DataNasc +
            '\nCpf:' + Cpf
        )
    }
    return (
        <View style={styles.container}>

            <View style={styles.container_Nome}>
                <View style={{ flex: 1, alignItems: 'center', }}>
                    {/* // titulo do Nome */}
                    <Text
                        style={styles.titulo_caixa_texto}> NOME
                    </Text>

                    {/* caixa de texto do Nome */}
                    <TextInput
                        style={styles.caixa_texto}
                        onChangeText={(text) => setNome(text)}
                    />

                    {/* titulo de Data de nascimento */}
                    <Text
                        style={styles.titulo_caixa_texto}> DATA DE NASCIMENTO
                    </Text>

                    {/* Caixa de texto de data de nascimento */}
                    <TextInput
                        style={styles.caixa_texto}
                        onChangeText={(text) => setDataNasc(text)}
                    />

                    {/* TITULO DO CPF */}
                    <Text
                        style={styles.titulo_caixa_texto}> CPF
                    </Text>

                    {/* CAIXA DE TEXTO DO CPF */}
                    <TextInput
                        style={styles.caixa_texto}
                        onChangeText={(text) => setCpf(text)}
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
                onPress={() => { props.navigation.goBack() }}>
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
    }
});
export default CadastroFarmacia;