import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    app: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    titulo: {
        fontSize: 30,
        textTransform: 'uppercase',
        color: 'white',
        marginVertical: 20,
    },
    subTitulo: {
        fontSize: 14,
        textTransform: 'uppercase',
        color: 'white',
        marginVertical: 20,
        textAlign: "center",
        marginHorizontal: 30
    },   
    input: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 25,
        fontSize: 24,
        width: '80%',
    },
    entrar: {
        paddingHorizontal: 76,
        paddingVertical: 10,
        borderRadius: 25,
    },
    entrarTexto: {
        color: 'white',
        fontWeight: '600',
        fontSize: 25,
        textTransform: 'uppercase',
        letterSpacing: 2,
        
    }
});