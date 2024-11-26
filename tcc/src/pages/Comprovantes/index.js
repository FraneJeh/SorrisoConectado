import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Comprovantes() {

  const data = [
    { id: '1', name: 'Emilly Castro', amount: 'R$ 160,59', date: '21/10/2024 15:18:39' },
    { id: '2', name: 'Emilly Castro', amount: 'R$ 160,59', date: '11/10/2024 15:17:48' },
    { id: '3', name: 'Emilly Castro', amount: 'R$ 160,59', date: '16/09/2024 11:19:22' },
    { id: '4', name: 'Emilly Castro', amount: 'R$ 160,59', date: '03/08/2024 09:42:14' },
    { id: '5', name: 'Emilly Castro', amount: 'R$ 160,59', date: '07/07/2024 09:46:57' },
    { id: '6', name: 'Emilly Castro', amount: 'R$ 160,59', date: '09/07/2024 09:43:56' },
    { id: '7', name: 'Emilly Castro', amount: 'R$ 160,59', date: '15/07/2024 09:43:56' },
    { id: '8', name: 'Emilly Castro', amount: 'R$ 160,59', date: '19/07/2024 09:43:56' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.amount}>{item.amount}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
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
  amount: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#aaa',
  },
});
