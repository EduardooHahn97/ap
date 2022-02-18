import { StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    tcc:{
        color: '#D3D3D3',
        position: 'absolute',
        bottom: '0', 
        textAlign: 'center',
        marginBottom:20
    },
    label:{
        fontSize: 25, 
        textAlign: 'center'
    },
    btn:{
        backgroundColor: 'black', 
        height: '3rem', 
        width: '90%',
        borderRadius: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', 
        marginBottom: '1rem', 
    }, 
    textoBtn:{
        color: 'white', 
        fontWeight: 'bold'
    }
});

export default estilo;