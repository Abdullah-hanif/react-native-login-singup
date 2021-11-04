import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login , Signup , Forget , Reset } from './src/screen'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Reset" component={Reset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;