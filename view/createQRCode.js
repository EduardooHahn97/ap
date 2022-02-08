import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function createQRCode(props){
    const [texto, setTexto] = useState('')

    const estilo = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        tit:{
            width: '100%',
            borderWidth:1,
            borderColor: '#000',
            padding: 10,
            borderRadius:10,
            marginBottom: '30px',
        },
        txt:{
            width: '100%',
            height: '250px',
            borderWidth:1,
            borderColor: '#000',
            padding: 10,
            borderRadius:10,
            marginBottom: '30px',
        },
        label:{
           fontSize: 25, 
        }
    });

    return(
        <View style={estilo.container}>
            <Text style={estilo.label}> Projeto de Trabalho de Conclusão de Curso do aluno Eduardo Hahn 
                de Engenharia de Computação </Text>
            <Text style={estilo.label}> Informe o Texto:</Text>
            <TextInput  
             style={estilo.txt}
            autoFocus={false} 
            multiline={true}
            value={texto} 
            onChangeText={text=>setTexto(text)}/>

            <Button 
                title='Gerar QRCode'
                onPress={()=>props.navigation.navigate('showQRCode', {texto:texto})}
            />
        </View>
    )
}

