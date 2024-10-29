import { FlatList, Text, StyleSheet } from "react-native"
import { Produtos } from "./type/produtos"


type ListaProdutosProps = {
    listaProduto: Produtos[]
}
const listaProduto = (props: ListaProdutosProps) => {
    return (
        <>
            <FlatList data={props.listaProduto}
                renderItem={(info) => {
                    return (
                        <Text style={styles.item}>
                            {(info.index + 1) + ' - '
                            + info.item.nome + '\n' + info.item.codigo + '\n' + info.item.preco}
                        </Text>
                    )
                }}

            />




        </>
    )
}
export default listaProduto;

 const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 100,
        color: 'red'
    }
})
