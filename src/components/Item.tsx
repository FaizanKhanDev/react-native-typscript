import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IItem } from './AddItem';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const Item: React.FC<IItem> = ({ item, quantity }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemName}> Item: {item}</Text>
      <Text style={styles.quantity}> Quantity: {quantity}</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="pencil" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('deleted')} style={styles.iconContainer}>
        <Icon name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
  },
  quantity: {
    fontSize: 14,
    color: '#666',
  },
  iconContainer: {
    padding: 5,
  },
});

export default Item;
