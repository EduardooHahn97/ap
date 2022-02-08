import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
//import RNQRGenerator from 'rn-qr-generator';

export default function showQRCode(props){
    let myQRCode = useRef();
    

    const downloadQRCode = () => {
      console.log('TESTE Eduardo');
      console.log(myQRCode.current);
      const qrCodeURL = document.getElementById('qrCodeEl');
        //.toDataURL("image/png")
       // .replace("image/png", "image/octet-stream");
      
      console.log(qrCodeURL);
      //let aEl = document.createElement("a");
      //aEl.href = qrCodeURL;
      //aEl.download = "QR_Code.png";
      //document.body.appendChild(aEl);
      //aEl.click();
      //document.body.removeChild(aEl);
    }

    return(
        <View>
            <Text> QRCode Gerado: {props.route.params.texto}</Text>
            <View style={styles.containerQr}>
                <QRCode 
                    value={props.route.params.texto ? props.route.params.texto : 'NA'} 
                    size={700} 
                    color="black" 
                    backgroundColor="white" 
                    logoSize={30} 
                    logoMargin={2} 
                    logoBorderRadius={15} 
                    logoBackgroundColor="yellow"
                    nativeID="qrCodeEl"
                    id = "qrCodeEl"
                    ref={myQRCode}
                /> 
            </View>

            <Button 
                title='Baixar PDF'
                onPress={()=>downloadQRCode()}
            />            
        </View>
    )
}

const styles = StyleSheet.create({
    containerQr: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30px',
    },
    buttonStyle: {
        backgroundColor: '#51D8C7',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#51D8C7',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30,
        padding: 10,
      },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
  });

