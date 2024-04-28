import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header'
import React, { useState } from 'react';
import AddItem, { IItem } from './src/components/AddItem'; /* import AddItem and interface*/
import Item from './src/components/Item';
export default function App() {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List"></Header>
      <View style={styles.contentWrapper}>


        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        ></AddItem>
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.item}-${index}`}
          renderItem={({ item }) => (
            <Item item={item.item} quantity={item.quantity} />
          )}
        >
        </FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
});