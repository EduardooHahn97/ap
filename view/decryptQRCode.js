import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Speech from 'expo-speech';


export default function createQRCode(props){

    const [texto, setTexto] = useState('Ao seu lado direito encontra-se uma escada que dá acesso ao segundo andar. A sua esquerda o local possui bancos para se sentar. A sua frente temos os banheiros masculino e feminino, a esquerda e a direita respectivamente ')

    const estilo = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        txt:{
            width: '100%',
            borderWidth:1,
            borderColor: '#000',
            padding: 10,
            borderRadius:10,
            marginBottom: '30px',
        }
    });


    async function falar(texto2){
        Speech.speak(texto2, {
            //language: 'en-US'
            language: 'pt-BR'
        });
    };

    async function recebeTexto(qrcode){
        falar(qrcode);
    }


    return(
        <View style={estilo.container}>
            <TextInput  
                style={estilo.txt}
                multiline={true}
                onChangeText={text=>recebeTexto(text)}/>

            <Button 
                title='Falar' onPress={falar(texto)}
            />
        </View>
    )
}

