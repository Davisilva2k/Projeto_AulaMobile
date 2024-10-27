import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";
import TelaCadastro from "../layouts/TelaCadastro";
import TelaSecundaria from "../layouts/TelaSecundaria";
import ExemploCalculo from "../components/ExemploCalculo";
import Apresentacao from "../layouts/Apresentacao";
import TelaCadPaciente from "../layouts/TelaCadPaciente";
import TelaInterativa from "../layouts/TelaInterativa";
import TelaCadastroProduto from "../layouts/TelaCadProdutos";
import TelaCadProdutos from "../layouts/TelaCadProdutos";
import TelaConsProduto from "../layouts/TelaConsProduto";
import TelaDeAlteracao from "../layouts/TelaDeAlteracao";
import LoginFarmacia from "../layouts/LoginFarmacia";
import CadastroFarmacia from "../layouts/CadastroFarmacia";
import CadastroProdutos from "../layouts/CadastroProduto";
import cadastroVendas from "../layouts/CadastroVendas";
import CadastroClientes from "../layouts/CadastroCliente";


type RootStackParamList = {
    TelaPrincipal: undefined;
    TelaLogin: undefined;
    TelaCadastro: undefined;
    TelaSecundaria: undefined;
    ExemploCalculo: undefined;
    Apresentacao: { valor: number };
    TelaCadPaciente: undefined;
    TelaInterativa: undefined;
    TelaCadProdutos: undefined;
    TelaConsProduto: undefined;
    TelaDeAlteracao: undefined;
    CadastroFarmacia: undefined;
    LoginFarmacia: undefined;
    CadastroProdutos: undefined;
    cadastroVendas: undefined;
    CadastroCliente: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginFarmacia"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
            <Stack.Screen name="TelaLogin" component={TelaLogin} />
            <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
            <Stack.Screen name="TelaSecundaria" component={TelaSecundaria} />
            <Stack.Screen name="Apresentacao" component={Apresentacao} />
            <Stack.Screen name="TelaCadPaciente" component={TelaCadPaciente} />
            <Stack.Screen name="TelaInterativa" component={TelaInterativa} />
            <Stack.Screen name="TelaCadProdutos" component={TelaCadProdutos} />
            <Stack.Screen name="TelaConsProduto" component={TelaConsProduto} />
            <Stack.Screen name="TelaDeAlteracao" component={TelaDeAlteracao} />
            <Stack.Screen name="CadastroFarmacia" component={CadastroFarmacia} />
            <Stack.Screen name="LoginFarmacia" component={LoginFarmacia} />
            <Stack.Screen name="CadastroProdutos" component={CadastroProdutos} />
            <Stack.Screen name="cadastroVendas" component={cadastroVendas} />
            <Stack.Screen name="CadastroCliente" component={CadastroClientes} />
        </Stack.Navigator>

    );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList,
    'TelaPrincipal'>;

type LoginProps = NativeStackScreenProps<RootStackParamList,
    'TelaLogin'>;

type CadastroProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastro'>;

type SecundariaProps = NativeStackScreenProps<RootStackParamList,
    'TelaSecundaria'>;

type CalculoProps = NativeStackScreenProps<RootStackParamList,
    'ExemploCalculo'>;

type ApresentacaoProps = NativeStackScreenProps<RootStackParamList,
    'Apresentacao'>;

type CadPacienteProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadPaciente'>;

type InterativaProps = NativeStackScreenProps<RootStackParamList,
    'TelaInterativa'>;

type ProdutoProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadProdutos'>;

type ConsProdutoProps = NativeStackScreenProps<RootStackParamList,
    'TelaConsProduto'>;

type AlteracaoProps = NativeStackScreenProps<RootStackParamList,
    'TelaDeAlteracao'>;
type CadFarmaciaProps = NativeStackScreenProps<RootStackParamList,
    'CadastroFarmacia'>;

    type LoginFarmProps = NativeStackScreenProps<RootStackParamList,
    'LoginFarmacia'>;

    type CadProdProps = NativeStackScreenProps<RootStackParamList,
    'CadastroProdutos'>;

    type VendasProps = NativeStackScreenProps<RootStackParamList,
    'cadastroVendas'>;

    type ClienteProps = NativeStackScreenProps<RootStackParamList,
    'CadastroCliente'>;







export default HomeNavigator;
export type {
    PrincipalProps,
    LoginProps,
    CadastroProps,
    SecundariaProps,
    CalculoProps,
    ApresentacaoProps,
    CadPacienteProps,
    InterativaProps,
    ProdutoProps,
    ConsProdutoProps,
    AlteracaoProps,
    CadFarmaciaProps,
    LoginFarmProps,
    CadProdProps,
    VendasProps,
    ClienteProps,
};