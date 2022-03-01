import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import * as Speech from 'expo-speech';
//import * as SQLite from 'expo-sqlite';
import axios from 'axios';
import estilo from './style/style';


function waitInstruction(props){
    const [lista, setLista] = useState([]);
    const [textoQR, setTextoQR] = useState('');

    useEffect(()=>{
        listarDados();
    },[])

    //setInterval("listarDados()", 2000);

    async function falar(texto2){
        //console.log("Entrou no falar");
        Speech.speak(texto2, {
            //language: 'en-US'
            language: 'pt-BR'
        });
    };

    async function recebeTexto(qrcode){
        falar(qrcode);
    }

    async function listarDados(){
        const resultado = await axios.get('http://192.168.0.120/servidor/logs.php');
        setLista(resultado.data);
        
        //console.log("COUNT - " + resultado.data['result'].length);
        if (resultado.data['result'][0]['texto'] != undefined){
            let i = 0;
            for(i = 0; i < resultado.data['result'].length; i++){
                //console.log(resultado.data['result'][i]['texto']);
                recebeTexto(String(resultado.data['result'][i]['texto']));
                const resultadoAtualizar = await axios.get('http://192.168.0.120/servidor/atualizar.php?idLog='+resultado.data['result'][i]['idLog']);
                //console.log(resultadoAtualizar);
            }
        }
        setTimeout(()=>{listarDados();}, 3000);
    }

/*
    const [texto, setTexto] = useState('');//useState('Ao seu lado direito encontra-se uma escada que dá acesso ao segundo andar. A sua esquerda o local possui bancos para se sentar. A sua frente temos os banheiros masculino e feminino, a esquerda e a direita respectivamente ')
  

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
};*/
const estiloHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        width: '90%',
        height: '50%',
    }
});

return(
    <View style={estiloHome.container}>
        <Image 
            style={estiloHome.img} 
            source={
                require("../img/ouvir.png")
                //uri: 'https://reactnative.dev/img/tiny_logo.png',
            }/>
        
    </View>
)
};

export default waitInstruction;

