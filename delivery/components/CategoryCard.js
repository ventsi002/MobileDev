import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity style={styles.touchable}>
            <Image source={{ uri: imgUrl }} style={styles.img} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 80,
        width: 80,
        borderRadius: 4
    },

    touchable: {
        marginRight: 8,
        position: 'relative'
    },

    text: {
        bottom: 4,
        left: 4,
        color: 'black',
        fontWeight: 'bold'
    }
});

export default CategoryCard