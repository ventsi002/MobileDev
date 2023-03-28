import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow';

const StoreScreen = () => {
    const navigation = useNavigation();

    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
        },
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView>
            <View style={{ position: 'relative' }}>
                <Image source={{ uri: imgUrl }} style={styles.mainImage} />

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.touchableArrow}>
                    <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: 'white' }}>
                <View style={styles.viewWithInfo}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.viewWithInfoChild}>
                        <View style={styles.viewStarIcon}>
                            <StarIcon color="green" opacity={0.5} size={22} />
                            <Text style={styles.textRatingGenre}>
                                <Text style={{ color: "#22c55e" }}>{rating}</Text>  • {genre}
                            </Text>
                        </View>
                        <View style={styles.viewMapPinIcon}>
                            <MapPinIcon color="grey" opacity={0.4} size={22} />
                            <Text style={styles.textAddress}>Nearby • {address}</Text>
                        </View>
                    </View>
                    <Text style={styles.textShortDescription}>{short_description}</Text>
                </View>
                <TouchableOpacity style={styles.touchableForAlergy}>
                    <QuestionMarkCircleIcon color="grey" opacity={0.6} size={20} />
                    <Text style={styles.textAllergy}>
                        You have drug addiction?
                    </Text>
                    <ChevronRightIcon color="#00CCBB" />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.textMenu}>
                    Menu
                </Text>
                <DishRow id={1}
                    name="Meth"
                    description="1 gram"
                    price={200}
                    img="https://cdn-icons-png.flaticon.com/512/2464/2464317.png" />
                <DishRow id={2}
                    name="Meth"
                    description="2 grams"
                    price={400}
                    img="https://cdn-icons-png.flaticon.com/512/2464/2464317.png" />
                <DishRow id={3}
                    name="Meth"
                    description="3 grams"
                    price={600}
                    img="https://cdn-icons-png.flaticon.com/512/2464/2464317.png" />
                <DishRow id={4}
                    name="Meth"
                    description="4 grams"
                    price={800}
                    img="https://cdn-icons-png.flaticon.com/512/2464/2464317.png" />
                <DishRow id={5}
                    name="Meth"
                    description="5 grams"
                    price={1000}
                    img="https://cdn-icons-png.flaticon.com/512/2464/2464317.png" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainImage: {
        width: '100%',
        height: 224,
        backgroundColor: '#d1d5db',
        padding: 16
    },

    touchableArrow: {
        position: 'absolute',
        top: 16,
        left: 12,
        padding: 8,
        backgroundColor: "#f3f4f6",
        borderRadius: 100
    },

    viewWithInfo: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16
    },

    title: {
        fontSize: 30,
        lineHeight: 36,
        fontWeight: 'bold'
    },

    viewWithInfoChild: {
        flexDirection: 'row',
        marginLeft: 8,
        marginTop: 4,
        marginBottom: 4
    },

    viewStarIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 4
    },

    textRatingGenre: {
        fontSize: 12,
        lineHeight: 16,
        color: "#6b7280"
    },

    viewMapPinIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 4
    },

    textAddress: {
        fontSize: 12,
        lineHeight: 16,
        color: "#6b7280"
    },

    textShortDescription: {
        color: "#6b7280",
        marginTop: 8,
        paddingBottom: 16
    },

    textAllergy: {
        paddingLeft: 8,
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'bold'
    },

    touchableForAlergy: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d1d5db'
    },

    textMenu: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 24,
        marginBottom: 12,
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 28,
    }

});

export default StoreScreen