import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native'


export default function Home(props){
 
    const estilo = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        },
        content : { 
            margin: '1rem',
            display: 'flex',
            height: '100%',
            alignItems:'center', 
            justifyContent: 'center',
            width: '100%'
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
        tcc:{
            color: '#D3D3D3',
            position: 'absolute',
            bottom: '0', 
            textAlign: 'center',
        },
        label:{
           fontSize: 25, 
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
            marginBottom: '1rem'
        }, 
        textoBtn:{
            color: 'white', 
            fontWeight: 'bold'
        }
    });
    //const {navigation} = this.props;
    return(
        <View style={estilo.container} >
            <View style={estilo.content}>
                    <View 
                        title='Criar QRCode 2'
                        onPress={()=>props.navigation.navigate('createQRCode')} 
                        style={estilo.btn}
                    >
                        <Text style={estilo.textoBtn}>Criar QRCode</Text>
                    </View>
                    <View 
                        onPress={()=>props.navigation.navigate('createDispo')} 
                        style={estilo.btn}
                    >
                        <Text style={estilo.textoBtn}>Cadastrar dispositivo</Text>
                    </View> 


                    <Button 
                        //title='         Criar QRCode           '
                        title='Criar QRCode'
                        onPress={()=>props.navigation.navigate('createQRCode')} />
                    <Text> </Text>
                    <Button style={estilo.btn}
                        title=' Cadastrar Dispositivo '
                        onPress={()=>props.navigation.navigate('createDisp')} />
                    <Text> </Text>
                    <Button style={estilo.btn}
                        title='Falar QR Code '
                        onPress={()=>props.navigation.navigate('decrypt')} />


                     <Text style={estilo.tcc}> Projeto de Trabalho de Conclusão de Curso do aluno Eduardo Hahn 
                    de Engenharia de Computação </Text>
            </View>
        </View>
    )
}