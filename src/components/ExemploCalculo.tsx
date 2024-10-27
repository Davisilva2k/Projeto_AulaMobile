import { Text } from "react-native";
import { styles } from "../styles/styles";

type CalculoProps = {
    valor1: number;
    valor2: number;
}

const ExemploCalculo = (props: CalculoProps) => {
    function somar() {
        return props.valor1 + props.valor2;
    }


    function subtrair() {
        return props.valor1 - props.valor2;
    }


    function multiplicar() {
        return props.valor1 * props.valor2;
    }


    function dividir() {
        if (props.valor2 != 0) {
            return props.valor1 / props.valor2;
        } else {
            return 0
        }
    }
    return (

        <>
            <Text style={styles.titulo2}>
                somar:{somar()}
            </Text>

            <Text style={styles.titulo2}>
                subtrair:{subtrair()}
            </Text>

            <Text style={styles.titulo2}>
                multiplicar:{multiplicar()}
            </Text>

            <Text style={styles.titulo2}>
                dividir:{dividir()}
            </Text>
        </>

    )
};
export default ExemploCalculo;