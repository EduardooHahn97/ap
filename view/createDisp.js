import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button } from 'react-native';
import config from "../config/config.json";


export default function createQRCode(props){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

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


    async function salvarDispositivo(){
        let req = await fetch(config.urlRootNode+'/saveDispositivo', {
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: nome,
                e_mail: email,
            })
        });
        //console.log("fucnao");
    };


    return(
        <View style={estilo.container}>
            <Text style={estilo.label}> Informe o Nome do Dispositivo:</Text>
            <TextInput  
                style={estilo.txt}
                multiline={true}
                value={nome} 
                onChangeText={text=>setNome(text)}/>

            <Text style={estilo.label}> Informe seu Email:</Text>
            <TextInput  
                style={estilo.txt}
                multiline={true}
                value={email} 
                onChangeText={text=>setEmail(text)}/>

            <Button 
                title='Salvar Dispositivo'
                //onPress={()=>props.navigation.navigate('saveDevice', {nome:nome, email: email})}
                onPress={salvarDispositivo}
            />
        </View>
    )
}

