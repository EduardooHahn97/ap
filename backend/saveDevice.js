import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function createQRCode(props){

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

    return(
        <View style={estilo.container}>
            <Text style={estilo.label}> Salvando Dados: {props.route.params.nome} e {props.route.params.email}</Text>
        </View>
    )
}

