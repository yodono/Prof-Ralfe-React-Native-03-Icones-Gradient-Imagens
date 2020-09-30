import React, {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState([
        {
            id: '1',
            titulo: 'Roveramdom',
            descricao: 'Em 1925, durante as férias, o pequeno Michael Tolkien perdeu, na praia, um cãozinho de brinquedo que ele adorava. Para consolá-lo, o pai, J. R. R. Tolkien, inventou uma história sobre um cachorro de verdade que é transformado em brinquedo por um mago e enviado por um feiticeiro-da-areia à Lua...',
            autor: 'J. R. R. Tolkien',
            anoPublicacao: '1998',
            foto: require('../../../assets/itens/1.jpg'),
        },
        {
            id: '2',
            titulo: 'Fundação',
            descricao: 'Lançado originalmente em 1951, o livro Fundação, de Isaac Asimov, é o primeiro volume da clássica Trilogia Fundação, vencedora do prêmio Hugo de melhor série de todos os tempos...',
            autor: 'Isaac Asimov',
            anoPublicacao: '1951',
            foto: require('../../../assets/itens/2.jpg'),
        },
        {
            id: '3',
            titulo: 'Androides Sonham com Ovelhas Elétricas?',
            descricao: 'Rick Deckard é um caçador de recompensas. Ao contrário da maioria da população que sobreviveu à guerra atômica, não emigrou para as colônias interplanetárias após a devastação da Terra...',
            autor: 'Philip K. Dick',
            anoPublicacao: '1968',
            foto: require('../../../assets/itens/3.jpg'),
        },
        {
            id: '4',
            titulo: 'O Mundo Assombrado Pelos Demônios',
            descricao: 'Assombrado com as explicações pseudocientíficas e místicas que ocupam cada vez mais os espaços dos meios de comunicação, Carl Sagan reafirma o poder positivo e benéfico da ciência e da tecnologia para iluminar os dias de hoje...',
            autor: 'Carl Sagan',
            anoPublicacao: '1995',
            foto: require('../../../assets/itens/4.jpg'),
        },
    ]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name='arrow-back' size={24} color='white'/>
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name='add' size={24} color='white' /> 
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <Lista data={item} />}
            />
            
        </View>
    );
}

export default Colecao;
