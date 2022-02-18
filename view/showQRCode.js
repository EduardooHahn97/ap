import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import estilo from './style/style'
//import RNQRGenerator from 'rn-qr-generator';

export default function showQRCode(props){
    //let myQRCode = useRef();
    

    const downloadQRCode = () => {
      console.log('TESTE Eduardo');
      //console.log(myQRCode.current);
      //const qrCodeURL = document.getElementById('qrCodeEl');
        //.toDataURL("image/png")
       // .replace("image/png", "image/octet-stream");
      
      //console.log(qrCodeURL);
      //let aEl = document.createElement("a");
      //aEl.href = qrCodeURL;
      //aEl.download = "QR_Code.png";
      //document.body.appendChild(aEl);
      //aEl.click();
      //document.body.removeChild(aEl);
    }

    return(
        <View style={styles.containerQr}>
            <Text> QRCode Gerado: {props.route.params.texto}</Text>
            <View style={styles.qr}>
                <QRCode 
                    value={props.route.params.texto ? props.route.params.texto : 'NA'} 
                    size={300} 
                    color="black" 
                    backgroundColor="white" 
                    logoSize={30} 
                    logoMargin={2} 
                    logoBorderRadius={15} 
                    logoBackgroundColor="yellow"
                    nativeID="qrCodeEl"
                    id = "qrCodeEl"
                    //ref={myQRCode}
                /> 
            </View>

            <TouchableOpacity style={estilo.btn}
                onPress={()=>downloadQRCode()}
            >     

            <Text style={estilo.textoBtn}>Baixar PDF</Text>
            
            </TouchableOpacity>    

            <Text style={estilo.tcc}> Projeto de Trabalho de Conclusão de Curso do aluno Eduardo Hahn 
                de Engenharia de Computação </Text>   
        </View>
    )
}

const styles = StyleSheet.create({
    containerQr: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qr:{
        marginBottom:50,
        marginTop:50
    }
  });

