import { StyleSheet } from 'react-native'
import { withOrientation } from 'react-navigation';

export default styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#A8A8BD',
    },
    header: {
        alignItems: 'center',
    },
    titulo: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        marginTop: 100,
        marginBottom: 35
    },
    container: {
        flex: 1,
        marginHorizontal: 50,
        justifyContent: 'center',
        bottom: 50
    },
    input: {
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 20,
        marginVertical: 5,
        padding: 16,
        justifyContent: 'center',
        fontSize: 24,
        backgroundColor: 'white'
    },
    calcular: {
        alignItems: "center",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
    },
    calcularBotao: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 23,
        letterSpacing: 3,
    },
    resultado: {
        fontSize: 23,
        textAlign: 'center',
        marginTop: 60,
        color: 'white'
    },
    voltar: {
        alignSelf: 'center',
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        color: 'white',
        position: "relative",
        top: 55,
    },
    voltarTexto: {
        color: 'white',
        fontSize: 15,
        textTransform: 'uppercase',
    },
});
