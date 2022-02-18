import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import estilo from './style/style'

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
 });
    return(
        <View style={estiloHome.container} >
            <View style={estiloHome.content}>
                <TouchableOpacity  style={estilo.btn}
                    onPress={()=>props.navigation.navigate('createQRCode')} >
                        <Text style={estilo.textoBtn}> Criar QRCode</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={estilo.btn}
                    onPress={()=>props.navigation.navigate('createDisp')} >
                        <Text style={estilo.textoBtn}>Cadastrar Dispositivo  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.btn}
                    onPress={()=>props.navigation.navigate('decrypt')} >

                    <Text style={estilo.textoBtn}> Falar QR Code </Text>
                </TouchableOpacity>


                <Text style={estilo.tcc}> Projeto de Trabalho de Conclusão de Curso do aluno Eduardo Hahn 
                de Engenharia de Computação </Text>
            </View>
        </View>
    )
}