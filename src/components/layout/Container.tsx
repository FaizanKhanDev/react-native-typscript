import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../Header.tsx'
import React, { useState } from 'react';
import AddItem, { IItem } from '../AddItem'; /* import AddItem and interface*/
import Item from '../Item';
import { Provider } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks.ts';

const Container = () => {
    const [shoppingList, setShoppingList] = useState<IItem[]>([]);
    const value = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    return (    
        <View>

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
        </View>

    )
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

  export default Container