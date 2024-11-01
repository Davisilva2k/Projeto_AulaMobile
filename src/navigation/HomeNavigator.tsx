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
import LoginFuncionarioFarmacia from "../layouts/LoginFuncionarioFarmacia";
import CadastroFuncionarioFarmacia from "../layouts/CadastroFuncionarioFarmacia";
import CadastroProdutos from "../layouts/CadastroProduto";
import cadastroVendas from "../layouts/CadastroVendas";
import CadastroClientes from "../layouts/CadastroCliente";
import TelaConsServico from "../layouts/TelaConsServico";
import TelaConsCliente from "../layouts/TelaConsCliente";


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
    CadastroFuncionarioFarmacia: undefined;
    LoginFuncionarioFarmacia: undefined;
    CadastroProdutos: undefined;
    cadastroVendas: undefined;
    CadastroCliente: undefined;
    TelaConsServico: undefined;
    consCliente: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="CadastroProdutos"
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
            <Stack.Screen name="CadastroFuncionarioFarmacia" component={CadastroFuncionarioFarmacia} />
            <Stack.Screen name="LoginFuncionarioFarmacia" component={LoginFuncionarioFarmacia} />
            <Stack.Screen name="CadastroProdutos" component={CadastroProdutos} />
            <Stack.Screen name="cadastroVendas" component={cadastroVendas} />
            <Stack.Screen name="CadastroCliente" component={CadastroClientes} />
            <Stack.Screen name="consCliente" component={TelaConsCliente} />

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
    'CadastroFuncionarioFarmacia'>;

    type LoginFarmProps = NativeStackScreenProps<RootStackParamList,
    'LoginFuncionarioFarmacia'>;

    type CadProdProps = NativeStackScreenProps<RootStackParamList,
    'CadastroProdutos'>;

    type VendasProps = NativeStackScreenProps<RootStackParamList,
    'cadastroVendas'>;

    type ClienteProps = NativeStackScreenProps<RootStackParamList,
    'CadastroCliente'>;
    type ConsClienteProps = NativeStackScreenProps<RootStackParamList,
    'consCliente'>;
    
    

    





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
    ConsClienteProps
};