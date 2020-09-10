import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Colecao from '../../views/Colecao/Colecao';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
      {
        labelStyle: { fontSize: 24 },
        style: {backgroundColor: '#14417b'},
        activeTintColor: '#FFFFFF' 
      }
      }
    >
      <Tab.Screen name="Inicial" component={RotasDrawer} />
      <Tab.Screen name="Colecao" component={Colecao} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default RotasTab;