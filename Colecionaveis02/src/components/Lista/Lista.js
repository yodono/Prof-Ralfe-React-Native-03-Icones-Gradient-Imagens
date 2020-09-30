import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const Lista = ({data}) => {
    const [item, setItem] = useState(data);

    return(
        <View>  
            <LinearGradient colors={['#6A68E3', '#7FC3FA', '#7FC3FA']}>
                <Text style={estiloLista.itemTitulo}> {item.titulo}</Text>
                <Text style={estiloLista.itemSubTitulo}> {item.autor} ({item.anoPublicacao})</Text>
            </LinearGradient>
            
            <LinearGradient colors={['#7FC3FA', '#7FC3FA', '#6A68E3']}>
                <Image source={item.foto} style={estiloLista.itemFoto} resizeMode='contain'/>
            </LinearGradient>
        </View>
    );
}

export default Lista;