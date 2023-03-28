import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';


const DishRow = ({ id, name, description, price, img }) => {
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'DKK'
        }).format(value);

    const [isPressed, setIsPressed] = useState(false);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
                style={[styles.touchableOpacity, isPressed && styles.touchableOpacityPressed]}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.viewWithInfo}>
                        <Text style={styles.textName}>{name}</Text>
                        <Text style={styles.textDescription}>{description}</Text>
                        <Text style={styles.textPrice}>{numberFormat(price)}</Text>
                    </View>

                    <View>
                        <Image source={{ uri: img }} style={styles.img} />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && (
                <View style={styles.viewParentPlusMinus}>
                    <View style={styles.viewChildPlusMinus}>
                        <TouchableOpacity onPress={decrement}>
                            <MinusCircleIcon color="#00CCBB" size={40} />
                        </TouchableOpacity>

                        <Text style={styles.count}>{count}</Text>
                        <TouchableOpacity onPress={increment}>
                            <PlusCircleIcon color="#00CCBB" size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    textName: {
        fontSize: 18,
        lineHeight: 28,
        marginBottom: 4
    },

    textDescription: {
        color: "#9ca3af"
    },

    textPrice: {
        color: "#9ca3af",
        marginTop: 8
    },

    img: {
        height: 80,
        width: 80,
        backgroundColor: "white",
        padding: 16,
        borderWidth: 0,
        borderColor: "#F3F3F1"
    },

    touchableOpacity: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: "#e5e7eb",
        padding: 16,
    },

    touchableOpacityPressed: {
        borderBottomWidth: 0
    },

    viewWithInfo: {
        flex: 1,
        paddingRight: 8
    },

    viewParentPlusMinus: {
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16
    },

    viewChildPlusMinus: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8
    },

    count: {
        marginLeft: 8,
        marginRight: 8
    }
});

export default DishRow