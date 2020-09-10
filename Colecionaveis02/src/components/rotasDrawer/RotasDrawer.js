import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicial from '../../views/Inicial/Inicial';
import Colecao from '../../views/Colecao/Colecao';
import Item from '../../views/Item/Item';
import Perfil from '../../views/Perfil/Perfil';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicial" component={Inicial}/>
      <Drawer.Screen name="Colecao" component={Colecao}/>
      <Drawer.Screen name="Item" component={Item}/>
      <Drawer.Screen name="Perfil" component={Perfil}/>
    </Drawer.Navigator>
  );
}

export default RotasDrawer;