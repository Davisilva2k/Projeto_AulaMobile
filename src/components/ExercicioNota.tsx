import { Text } from "react-native";
import { styles } from "../styles/styles";

type CalculoProps = {
    nota1: number;
    nota2: number;
    nome: String;
}

const ExercicioNota = (props: CalculoProps) => {
    function media() {
        return (props.nota1 + props.nota2) / 2;
    }
    function aprovado() {
        if (media() >= 7) {
            return "Sim"
        } else return "Nao"
    }
    return (
        <>
        <Text style= {styles.titulo3}>Nome:{props.nome}</Text>
        <Text>Nota:{media()}</Text>
        <Text>Aprovado:{aprovado()}</Text>
        </>
    )
};
export default ExercicioNota;

   

