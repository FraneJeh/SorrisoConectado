import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import Inicio from './src/pages/Inicio';
import Comprovantes from './src/pages/Comprovantes';
import Recuperar from './src/pages/Recuperar';
import Cadastro from './src/pages/Cadastro';
import Profissionais from './src/pages/Profissionais';
import AgendaJo from './src/pages/AgendaJo';
import AgendaMa from './src/pages/AgendaMa';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login} />

        <Stack.Screen
          name='Inicio'
          component={Inicio} />

          <Stack.Screen
          name='Comprovantes'
          component={Comprovantes} /> 

        <Stack.Screen
          name='Recuperar'
          component={Recuperar} /> 

        <Stack.Screen
          name='Cadastro'
          component={Cadastro} />

        <Stack.Screen
          name='Profissionais'
          component={Profissionais} /> 

        <Stack.Screen
          name='AgendaJo'
          component={AgendaJo} /> 

        <Stack.Screen
          name='AgendaMa'
          component={AgendaMa} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});