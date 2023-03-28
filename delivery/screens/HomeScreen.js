import { StyleSheet, View, Text, SafeAreaView, Image, StatusBar, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/outline";
import { Use } from 'react-native-svg';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView style={styles.safeArea} >
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <View style={styles.view}>
                <Image source={{ uri: 'https://links.papareact.com/wru' }} style={styles.img} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.delivery}>Deliver Now!</Text>
                    <Text style={styles.location}>Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />
            </View>

            <View style={styles.searchViewParent}>
                <View style={styles.searchView}>
                    <MagnifyingGlassIcon color="grey" size={20} />
                    <TextInput placeholder='Restaurants and cuisines' />
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

            <ScrollView style={{ backgroundColor: "#f3f4f6" }} contentContainerStyle={{ paddingBottom: 100 }}>
                <Categories />

                <FeaturedRow id={1} title="Featured" description="Paid placements from our partners" />
                <FeaturedRow id={2} title="Tasty discounts" description="Everyone's favourite category" />
                <FeaturedRow id={3} title="Offers near you" description="Support the local dealer's" />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'white',
    },

    img: {
        height: 28,
        width: 28,
        backgroundColor: 'gray',
        padding: 4,
        borderRadius: 40,
        marginRight: 8
    },

    view: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 8
    },

    delivery: {
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 12,
        lineHeight: 16
    },

    location: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 28
    },

    searchView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        backgroundColor: '#e5e7eb',
        padding: 12,
        flex: 1
    },

    searchViewParent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8,
        marginLeft: 16,
        marginRight: 16
    }
});