import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import DealerCard from './DealerCard'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View style={styles.viewChild}>
                <Text style={styles.title}>{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text style={styles.description}>{description}</Text>

            {id === 1 &&
                <ScrollView horizontal
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}>

                    <DealerCard id={1}
                        imgUrl="https://cdn-icons-png.flaticon.com/512/3346/3346025.png"
                        title="Jamal's meth"
                        rating={4.5}
                        genre="drugs"
                        address="around the block"
                        short_description="Heisenberg's formula"
                        dishes={[]} />

                    <DealerCard id={2}
                        imgUrl="https://cdn-icons-png.flaticon.com/512/3006/3006876.png"
                        title="Liroy's weed"
                        rating={4.0}
                        genre="drugs"
                        address="around the block"
                        short_description="Fresh from the mountains"
                        dishes={[]} />
                </ScrollView>
            }

            {id === 2 &&
                <ScrollView horizontal
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}>

                    <DealerCard id={3}
                        imgUrl="https://cdn-icons-png.flaticon.com/512/5596/5596677.png"
                        title="Samuel's coke"
                        rating={4.6}
                        genre="drugs"
                        address="around the block"
                        short_description="The best meth in town"
                        dishes={[]} />

                    <DealerCard id={4}
                        imgUrl="https://as2.ftcdn.net/v2/jpg/05/15/37/79/1000_F_515377976_QYtQYSgJDJD0ilAg5uHvwDzvATz4phFd.jpg"
                        title="Frank Lucas"
                        rating={4.9}
                        genre="drugs"
                        address="around the block"
                        short_description="The best of the best"
                        dishes={[]} />
                </ScrollView>
            }
            {id === 3 &&
                <ScrollView horizontal
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}>

                    <DealerCard id={5}
                        imgUrl="https://cdn-icons-png.flaticon.com/512/366/366533.png"
                        title="holy mushrooms"
                        rating={5.0}
                        genre="drugs"
                        address="around the block"
                        short_description="You will hear the colors and see the sounds"
                        dishes={[]} />

                    <DealerCard id={5}
                        imgUrl="https://cdn-icons-png.flaticon.com/512/3126/3126421.png"
                        title="holy mushrooms"
                        rating={3.8}
                        genre="drugs"
                        address="around the block"
                        short_description="Let the techno party begin"
                        dishes={[]} />


                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 28
    },

    viewChild: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16
    },

    description: {
        fontSize: 12,
        lineHeight: 16,
        color: "#6b7280",
        paddingLeft: 16,
        paddingRight: 16
    },

    scrollView: {
        paddingTop: 16
    }
});

export default FeaturedRow