import { useEffect, useState } from "react"
import firestore from "@react-native-firebase/firestore"
import { Alert, FlatList, Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { ConsProdutoProps } from "../navigation/HomeNavigator";
import { Produtos } from "../components/type/produtos";

const TelaConsProduto = (props: ConsProdutoProps) => {
    const [produto, setProduto] = useState([] as Produtos[]);

    //Buscar os dados quando abrir a tela

    useEffect(() => {
        const subscribe = firestore()
            .collection('produtos')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as Produtos[]

                setProduto(data);
            });
        return () => subscribe();
    }, []);

    function deletarProduto(id: string) {
        firestore()
            .collection('produtos')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Produto", "Removido com sucesso")
            })
            .catch((error) => console.log(error));
    }


    return (
        <View style={styles.tela}>
            <Text style={styles.titulo2}>Listagem de produto</Text>
            <FlatList
                data={produto}
                renderItem={(info) =>
                    <ItemProduto
                        numeroOrdem={info.index + 1}
                        prod={info.item}
                        onDeletar={deletarProduto} />} />

            <View style={styles.centralizar}>
                <Pressable
                    style={[styles.botao, { width: '40%' }]}
                    onPress={() => (props.navigation.goBack())} >
                    <Text style={styles.texto_botao}>Voltar</Text>
                </Pressable>
            </View>
        </View >

    );

}

type ItemProdutosProps = {
    numeroOrdem: number;
    prod: Produtos;
    onDeletar: (id: string) => void;
}


const ItemProduto = (props: ItemProdutosProps) => {
    return (
        <View style={styles.card} >
            <View style={styles.card_titulo}>
                <Text style={{ fontSize: 30, color: 'black' }}>{props.numeroOrdem + ' - ' + props.prod.nome}</Text>

                <Text style={{ fontSize: 20 }}>Id: {props.prod.nome}</Text>

                <Text style={{ fontSize: 40 }}>Codigo de barras: {props.prod.codigo}</Text>

                <Text style={{ fontSize: 20 }}>Preço: R$ {props.prod.preco}</Text>
            </View>

            <View style={styles.botao_deletar}>
                <Pressable
                    onPress={() => props.onDeletar(props.prod.id)}>
                    <Text style={styles.texto_botao_card}>
                        X
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default TelaConsProduto