import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import estilo from './style/style';
//import Mylogo from '../img/logo.png';

export default function Home(props){
 const estiloHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content : { 
        margin: '1rem',
        display: 'flex',
        height: '100%',
        alignItems:'center', 
        justifyContent: 'center',
        width: '100%',
    },
    stretch: {
        marginBottom: 50,
        width: 250,
        height: 250,
        resizeMode: 'stretch',
      },
 });

 /*<TouchableOpacity style={estilo.btn}
                    onPress={()=>props.navigation.navigate('createDisp')} >
                        <Text style={estilo.textoBtn}>Cadastrar Dispositivo  </Text>
                </TouchableOpacity>*/ 

    return(
        <View style={estiloHome.container} >
            <View style={estiloHome.content}>
                <Image 
                    style={estiloHome.stretch} 
                    source={
                        require("../img/logo.png")
                        //uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }/>

                <TouchableOpacity  style={estilo.btn}
                    onPress={()=>props.navigation.navigate('createQRCode')} >
                        <Text style={estilo.textoBtn}> Criar QRCode</Text>
                </TouchableOpacity>
                
                
                <TouchableOpacity style={estilo.btn}
                    onPress={()=>props.navigation.navigate('waitIns')} >

                    <Text style={estilo.textoBtn}> Aguardar Instrução </Text>
                </TouchableOpacity>


                <Text style={estilo.tcc}> Projeto de Trabalho de Conclusão de Curso do aluno Eduardo Hahn 
                de Engenharia de Computação </Text>
            </View>
        </View>
    )
}