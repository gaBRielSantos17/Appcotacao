import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DolarScreen from './screens/dolarScreen';
import EuroScreen from './screens/euroScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dólar Americano">
        <Drawer.Screen name="Dólar Americano" component={DolarScreen} />
        <Drawer.Screen name="Euro" component={EuroScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 