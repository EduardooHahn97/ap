import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import config from "../config/config.json";
import estilo from './style/style'


export default function createQRCode(props){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const estiloDisp = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        txt:{
            width:'90%',
            height:50,
            border: '0.5px solid #000',
            //backgroundColor: "#FFF",
            borderRadius: 8,
            justifyContent: "center",
            paddingHorizontal: 16,
            marginTop: 4,
            marginBottom: 16,
            paddingTop:'0.3rem',
            marginTop:10, 
            fontSize:20
        },
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
        <View style={estiloDisp.container}>
            <Text style={estilo.label}> Informe o Nome do Dispositivo:</Text>
            <TextInput  
                style={estiloDisp.txt}
                value={nome} 
                onChangeText={text=>setNome(text)}/>

            <Text style={estilo.label}> Informe seu Email:</Text>
            <TextInput  
                style={estiloDisp.txt}
                value={email} 
                onChangeText={text=>setEmail(text)}/>

            <TouchableOpacity style={estilo.btn}
                //onPress={()=>props.navigation.navigate('saveDevice', {nome:nome, email: email})}
                onPress={salvarDispositivo}
            >
                <Text style={estilo.textoBtn}>Salvar Dispositivo</Text>
            </TouchableOpacity>

            <Text style={estilo.tcc}> Projeto de Trabalho de Conclusão de Curso do aluno Eduardo Hahn 
                de Engenharia de Computação </Text>
        </View>
    )
}

