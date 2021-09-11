import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';
import Apresentacao from './src/Apresentacao';



const Stack = createStackNavigator();


function Myapp() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Apresentacao" component={Apresentacao} />
        <Stack.Screen name="Listagem" component={Tela1} />
        <Stack.Screen name="Detalhes" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Myapp;

