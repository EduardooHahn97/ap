import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import qr from 'qrcode';
import estilo from './style/style'  
//import CreatePDF from 'createPDF';
//import {Document, Page, Text, Image, View, StyleSheet} from '@react-pdf/renderer';
//import Pdf from 'react-native-pdf';
//import RNQRGenerator from 'rn-qr-generator';

export default function showQRCode(props){
    //this.svg;
    let myQRCode = useRef('');
    //this.myRef = React.createRef();
    

    const downloadQRCode = () => {
      console.log('TESTE Eduardo');
      //console.log(this.myRef);
      //const qrCodeURL = document.getElementById('qrCodeEl').value;
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

    const shareQRCode = () => {
        const resposta = qr.toDataURL(props.route.params.texto);
        console.log(resposta);
        let downloadLink = document.createElement("a");
        downloadLink.href = resposta;
        downloadLink.download = 'qrcode.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        /*const canvas = document.getElementById("qrCodeEl");

        console.log(canvas);
        const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = 'qrcode.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);*/

        /*this.myQRCode.toDataURL((data) => {
            const shareImageBase64 = {
              title: "QR",
              message: "Ehi, this is my QR code",
              url: `data:image/png;base64,${data}`
            };
            Share.open(shareImageBase64);
          });*/
        /*myQRCode[0].toDataURL((dataURL) => {
          console.log(dataURL);
          let shareImageBase64 = {
            title: 'React Native',
            url: `data:image/png;base64,${dataURL}`,
            subject: 'Share Link', //  for email
          };
          Share.share(shareImageBase64).catch((error) => console.log(error));
        });
        
          <Text style={estilo.textoBtn}>Baixar PDF</Text>
            
            </TouchableOpacity>   
            
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
                    //getRef={(ref) => (this.svg = ref)}
                    getRef={(ref) => (myQRCode = ref)}
                    //ref={this.myRef}
                    //getRef
                    //myRef = React.createRef();
                /> 
        */
      };


    return(
        <View style={styles.containerQr} onPress={shareQRCode}>
            <Text> QRCode Gerado: {props.route.params.texto}</Text>
            <View style={styles.qr}>
                {resposta ? (<a href={resposta} download> <img src={resposta} alt="img" /></a>): null}
            </View>

            <button //style={estilo.btn}
                //onPress={()=>downloadQRCode()}
                type="button" 
                onClick={shareQRCode}
                //value='Baixar PDF'
                //onPress={()=> CreatePDF}
                //onPress={()=>props.navigation.navigate('createPDF', {qrcode:myQRCode})}
            >
                  Download QR Code
            </button>    

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

