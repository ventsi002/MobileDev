import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            style={styles.scrollView}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/7550/7550755.png" title="Weed" />
            <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/1903/1903095.png" title="Cocaine" />
            <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/2464/2464317.png" title="Meth" />
            <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/1685/1685848.png" title="Heroin" />
            <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/6199/6199027.png" title="Mushrooms" />
            <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/3284/3284004.png" title="ecstasy" />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 15,
        paddingTop: 10
    }
})

export default Categories