import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import estilo from './style/style'

export default function createQRCode(props){
    const [texto, setTexto] = useState('')

    const estiloCreate = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        txt:{
            height: 200,
            width:'90%',
            border: '0.5px solid #000',
            //backgroundColor: "#FFF",
            borderRadius: 8,
            justifyContent: "center",
            paddingHorizontal: 16,
            marginTop: 4,
            marginBottom: 16,
            paddingTop:'0.5rem',
            marginTop:16
        }
    });

    return(
        <View style={estiloCreate.container}>
            <Text style={estilo.label}> Informe o texto que deseja gravar no QR Code:</Text>
            <TextInput
                style={estiloCreate.txt}
                autoFocus={false} 
                multiline={true}
                value={texto} 
                onChangeText={text=>setTexto(text)}/>

            <TouchableOpacity style={estilo.btn}
                onPress={()=>props.navigation.navigate('showQRCode', {texto:texto})}> 
            
            <Text style={estilo.textoBtn}>Gerar QRCode</Text>
            
            </TouchableOpacity>



            <Text style={estilo.tcc}> Projeto de Trabalho de Conclusão de Curso do aluno Eduardo Hahn 
                de Engenharia de Computação </Text>
        </View>
    )
}

