import React from "react";
import { View, Text } from "react-native";

interface Props {
    item: string
    quantity: number
}

const Item: React.FC<Props> = ({item, quantity }) => {

    return (
        <View>
            <Text>{item} - {quantity}</Text>
        </View>
    )
}

export default Item