import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './view/Home';
import createQRCode from './view/createQRCode';
import showQRCode from './view/showQRCode';
import createDisp from './view/createDisp';
//import downloadPDF from './view/downloadPDF';

export default function App(props) {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {<Stack.Screen name="Home" component={Home} />}
        <Stack.Screen name="createQRCode" options={
          {title:"jhenny lkinda"}
        } component={createQRCode} />
        <Stack.Screen name="showQRCode" component={showQRCode} />
        <Stack.Screen name="createDisp" component={createDisp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
