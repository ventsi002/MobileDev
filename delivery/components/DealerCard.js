import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const DealerCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Store', {
                    id,
                    imgUrl,
                    title,
                    rating,
                    genre,
                    address,
                    short_description,
                    dishes,
                });
            }}
            style={styles.touchableOpacity}>
            <Image source={{ uri: imgUrl }} style={styles.img} />

            <View style={styles.viewParent}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.viewChild}>
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text style={styles.textInfo}>
                        <Text style={{ color: "#22c55e" }}>{rating}</Text> • {genre}
                    </Text>
                </View>

                <View style={styles.viewChild}>
                    <MapPinIcon color="grey" opacity={0.4} size={22} />
                    <Text style={styles.textInfo}>Nearby • {address} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 144,
        width: 256,
        borderRadius: 2,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 28,
        paddingTop: 8,
    },

    viewParent: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 16
    },

    viewChild: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 4
    },

    textInfo: {
        fontSize: 12,
        lineHeight: 16,
        color: '#6b7280'
    },

    touchableOpacity: {
        backgroundColor: 'white',
        marginRight: 12,
        elevation: 4

    }

});

export default DealerCard