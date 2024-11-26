import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Profissionais() {
  const navigation = useNavigation();

  // Lista de profissionais
  const data = [
    { id: '1', name: 'Dr. João Silva', profession: 'Cirurgião' },
    { id: '2', name: 'Dra. Maria Oliveira', profession: 'Ortodontista' },
    { id: '3', name: 'Dr. Pedro Santos', profession: 'Clínico Geral' },
    { id: '4', name: 'Dra. Luciana Cardoso Espejo Trung', profession: 'Odontopediatra' },
    { id: '5', name: 'Dr. Lucas Almeida', profession: 'Implantodontista' },
    { id: '6', name: 'Dra. Fernanda Lima', profession: 'Endodontista' },
    { id: '7', name: 'Dra. Juliana Pereira', profession: 'Odontologia Regenerativa' },
    { id: '8', name: 'Dr. Carlos Souza', profession: 'Tratamentos de Bruxismos' },
  ];

  // Função para navegar para a agenda com os dados do profissional selecionado
  const handlePress = (name, profession) => {
    navigation.navigate('AgendaJo', { name, profession }); // Navega para AgendaJo com os parâmetros
  };

  // Renderização de cada item na lista
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handlePress(item.name, item.profession)} // Passa o nome e a profissão do profissional
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.profession}>{item.profession}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    backgroundColor: '#D4F0F1',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    color: '#000',
  },
  profession: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});
