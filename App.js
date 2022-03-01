import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './view/Home';
import createQRCode from './view/createQRCode';
import showQRCode from './view/showQRCode';
import createDisp from './view/createDisp';
import saveDevice from './backend/saveDevice';
import waitIns from './view/waitInstruction';
import createPDF from './view/createPDF';
/* <Stack.Screen name="createPDF" options={
          {title:"Gerar PDF"}
        }  component={createPDF} />*/ 
//import downloadPDF from './view/downloadPDF';

export default function App(props) {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {<Stack.Screen name="Home" options={
          {title:"Página Inicial"}
        }  component={Home} />}
        <Stack.Screen name="createQRCode" options={
          {title:"Criar Qr Code"}
        } component={createQRCode} />
        <Stack.Screen name="showQRCode" options={
          {title:"Apresentar Qr Code"}
        }  component={showQRCode} />
        <Stack.Screen name="createDisp" options={
          {title:"Cadastrar Dispositivo"}
        } component={createDisp} />
        <Stack.Screen name="saveDevice" options={
          {title:"Salvar Dispositivo"}
        } component={saveDevice} />
        <Stack.Screen name="waitIns" options={
          {title:"Aguardar Instrução"}
        } component={waitIns} />
        <Stack.Screen name="createPDF" options={
          {title:"Gerar PDF"}
        }  component={createPDF} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
