import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Speech from 'expo-speech';
import * as SQLite from 'expo-sqlite';




/*constructor(props){
    super(props)
    this.state = {
      data: null
    }
    // Check if the items table exists if not create it
    // ignore it for now
  }*/
export default function waitInstruction(props){

    const db = SQLite.openDatabase('db.qrcode'); // returns Database object

    function createDataBase(){
        db.transaction(tx => {
            tx.executeSql(
            'CREATE TABLE IF NOT EXISTS log (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT, dispositivo INT, verificado, INT data DATE)'
            )
        })
        this.fetchData()
    }
   

    function fetchLogs() {
        db.transaction(tx => {
        // sending 4 arguments in executeSql
        tx.executeSql('SELECT * FROM log WHERE verificado = 0', null, // passing sql query and parameters:null
            // success callback which sends two things Transaction object and ResultSet Object
            (txObj, { rows: { _array } }) => this.setState({ data: _array }),
            // failure callback which sends two things Transaction object and Error
            (txObj, error) => console.log('Error ', error)
            ) // end executeSQL
        }) // end transaction
    }

  function newLog(){
    db.transaction(tx => {
      tx.executeSql('INSERT INTO log (texto, dispositivo, verificado, data ) values ("teste", 1, 0, "24/02/2022")', ['gibberish', 0],
        (txObj, resultSet) => this.setState({ data: this.state.data.concat(
            { id: resultSet.insertId, text: 'gibberish', count: 0 }) }),
        (txObj, error) => console.log('Error', error))
    })
  }






    const [texto, setTexto] = useState('Ao seu lado direito encontra-se uma escada que dá acesso ao segundo andar. A sua esquerda o local possui bancos para se sentar. A sua frente temos os banheiros masculino e feminino, a esquerda e a direita respectivamente ')

    const estilo = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        txt:{
            width: '100%',
            borderWidth:1,
            borderColor: '#000',
            padding: 10,
            borderRadius:10,
            marginBottom: '30px',
        }
    });


    async function falar(texto2){
        Speech.speak(texto2, {
            //language: 'en-US'
            language: 'pt-BR'
        });
    };

    async function recebeTexto(qrcode){
        falar(qrcode);
    }


    return(
        <View style={estilo.container}>
            <TextInput  
                style={estilo.txt}
                multiline={true}
                onChangeText={text=>recebeTexto(text)}/>

            <Button 
                title='Falar' onPress={falar(texto)}
            />

            <Button 
                title='Create Banco' onPress={createDataBase}
            />

            <Button 
                title='Novo Log' onPress={newLog}
            />

            <Button 
                title='Buscar Log' onPress={fetchLogs}
            />
        </View>
    )
}

