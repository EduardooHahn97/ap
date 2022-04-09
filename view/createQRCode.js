import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import estilo from './style/style';
import qr from 'qrcode';

export default function createQRCode(props){
    const [texto, setTexto] = useState('')
    const [resposta, setResposta] = useState('')
    //let rsp = null;

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
        }, 
        containerQr: {
            //flex: 1,
            //justifyContent: 'center',
            //alignItems: 'center',
        },
        qr:{
            marginBottom:50,
            marginTop:50
        }
    });

    const GenerateQRCode = async () => {
        const rsp = await qr.toDataURL(texto);
        setResposta(rsp);
        console.log(rsp);
    };


    const DownloadQRCode= () =>{
        let downloadLink = document.createElement("a");
        downloadLink.href = resposta;
        downloadLink.width = '900px';
        downloadLink.height = '900px';
        downloadLink.download = 'qrcode.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };



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
                //onPress={()=>props.navigation.navigate('showQRCode', {texto:texto})}
                onPress={()=>GenerateQRCode()}
            >
            
            <Text style={estilo.textoBtn}>Gerar QRCode</Text>
            
            </TouchableOpacity>
            
            {resposta ? <img src={resposta} alt="img" width='150px' />: null}

            <TouchableOpacity style={estilo.btn}
                //onPress={()=>props.navigation.navigate('showQRCode', {texto:texto})}
                onPress={()=>DownloadQRCode()}
            >
            
            <Text style={estilo.textoBtn}>Baixar QRCode</Text>

            
            </TouchableOpacity>



            <Text style={estilo.tcc}> Projeto de Trabalho de Conclusão de Curso do aluno Eduardo Hahn 
                de Engenharia de Computação </Text>
        </View>
    )
}

/*            <View style={estilo.qr}>
                {resposta ? (<a href={resposta} download> <img src={resposta} alt="img" /></a>): null}
            </View>

            {resposta ? (<a href={resposta} download><img src={resposta} alt="img"/></a>) : null}
             */
