import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useAppSelector, useAppDispatch } from './../app/hooks.ts'

// import { createStudent } from "../store/reducers/student";
import { increment } from "../features/counter/counterSlice";
export interface IItem {
    item: string,
    quantity: number
}
interface Props {
    setShoppingList: React.Dispatch<React.SetStateAction<IItem[]>>;
    shoppingList: IItem[];
}

const AddItem: React.FC<Props> = ({ setShoppingList, shoppingList }) => {
    const value = useAppSelector((state) => state.counter.value)

    const dispatch = useAppDispatch();
    const [item, setItem] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(0);
    const addItem = () => {
        let myObj: { name: string, age: number } = {
            name: "item",
            age: 10
        };
        dispatch(increment());

        if (!item) {
            Alert.alert('Please enter an item');
        } else {
            setShoppingList([
                ...shoppingList,
                {
                    item,
                    quantity: quantity || 1,
                },
            ]);
            setItem('');
            setQuantity(0);
        }
    }
    return (
        <View>
            <Text>Add Shopping Item</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Item"
                    value={item}
                    onChangeText={text => setItem(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter quantity"
                    keyboardType="numeric"
                    value={quantity.toString()}
                    onChangeText={q => {
                        setQuantity(Number(q));
                    }}
                />
                <TouchableOpacity onPress={addItem} style={styles.addItemButton}>
                    <Text style={styles.buttonText}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: '700',
    },
    form: {
        marginTop: 30,
    },
    input: {
        padding: 15,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    addItemButton: {
        backgroundColor: '#eb8634',
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: { color: '#fff', fontWeight: '500' },
});

export default AddItem;
