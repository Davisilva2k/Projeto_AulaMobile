import { ScrollView, StyleSheet } from "react-native";
import ExercicioNota from "../components/ExercicioNota";

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#FFFACD'
    },
    titulo1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white',
    },
    titulo3: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white'
    },

    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    texto_botao: {
        fontSize: 20,
        color: 'white'
    },

    caixa_texto: {
        color: 'white',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'white',
        alignItems: 'center',
        margin: 3
    },

    largura_70: {
        width: '70%'
    },

    imagem_200: {
        width: 200,
        height: 200
    },

    container: {
        alignItems: 'center'
    },

    botoesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 20,
    },

    exercicioNota: {
        alignItems: 'center',
        marginTop: 20,
    },

    click:{
        opacity: 0.5
    },

    tituloPreto1: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },

    tituloPreto2: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'black'
    },

    tituloPreto3: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black'
    },

    caixa_texto1: {
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black',
        alignItems: 'center',
        margin: 3
    },

    caixa_texto2: {
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black',
        alignItems: 'center',
        margin: 3
    },

    centralizar: {
        alignItems: 'center',
    },
    card: {
        borderWidth: 5,
        borderColor: 'red',
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'white',
        padding: 15, // Espaçamento interno
        shadowColor: "#000", // Sombra para Android
        shadowOffset: { width: 0, height: 2 }, // Sombra para iOS
        shadowOpacity: 0.1, // Sombra para iOS
        shadowRadius: 6, // Sombra para iOS
        elevation: 5, // Sombra para Android
    },
    botao_deletar: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto_botao_card: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    card_texto: {
        fontSize: 20,
        color: 'black',
        marginVertical: 5,
    },
    card_titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    card_codigo: {
        fontSize: 40,
        color: 'black',
        marginVertical: 10,
    },

    // Aqui começa os styles de Loginfarmacia

    titulo4: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    titulo5: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'black',
    },
    titulo6: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white'
    },

    caixa_texto4: {
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black',
        alignItems: 'center',
        margin: 3,
        backgroundColor: 'white',
    },
});








export { styles };