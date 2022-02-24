import QRCode from 'react-native-qrcode-svg';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function showQRCode(props){

/*componentDidMount = () =>{
  this.getDataURL(); // => Calling this in here to make sure the QRCode component did mount
};


print = () => {
  Print.printAsync({
    html: `
       <h3>Hello World</h3>
       <img src="data:image/jpeg;base64,${this.state.qrData}"/>
     `
  });
};


getDataUR = () =>{
  this.svg.toDataURL(this.callback);
};
callback  = (dataURL) =>{
  this.setState({qrData: dataURL});
};

<View style={styles.containerQr}>
    <QRCode
      value="Just some string value"
      getRef={(c) => (this.svg = c)}
    />

    {props.route.params.texto}
    <Button title="Print QR to HTML" onPress={this.print} />
    </View>
*/
 return (
    <View>
        {console.log(props.route.params.QRCode)}
    </View>
  );

 }



/*

import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import estilo from './style/style'
import {Document, Page, Image, View, StyleSheet} from '@react-pdf/renderer';

export default function showQRCode(props){

    

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

    const resultArray = PDFImageIds.map(id => {
        IdsArray.push(id);
        return document.getElementById(id).toDataURL();
    });

    const {PDFImageIds} = props;

    const styles = StyleSheet.create({
        page: {
            backgroundColor: 'white',
            display: 'block', 
        },
        view:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
        },
        QRImage:{
            width: '100%',
            height: '100%',
        },
        text:{
            color: '#0081C6',
            size: '11em'
        }
    });

    return(
        <Document>
            {resultArray.map((dataURL, id) => {
                return(
                    <Page key={`PageId_${id}`} size={'B8'} styke={styles.page}>
                        <View style={styles.view}>
                            <Image allowDangerousPath src={dataURL} style={styles.QRImage} />
                        </View>
                        <View  style={styles.view}>
                            <Text style={styles.text}>
                                {IdsArray[id]}
                            </Text>
                        </View>
                    </Page>
                )
            })}
        </Document>
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

*/