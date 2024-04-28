import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header'
import React, { useState } from 'react';
import AddItem, { IItem } from './src/components/AddItem'; /* import AddItem and interface*/
import Item from './src/components/Item';
import  store  from './src/app/store';
import { Provider } from 'react-redux';
import { useAppSelector, useAppDispatch } from './src/app/hooks';
import Container from './src/components/layout/Container';
export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
      <Container></Container>
      </SafeAreaView>
    </Provider>
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