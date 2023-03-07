import { Pressable, ScrollView } from 'react-native';
import { Image, StyleSheet, View, FlatList, useWindowDimensions, Text } from 'react-native'
import {useSelector} from 'react-redux'

const ProductDetail = () => {
    const product = useSelector((state)=> state.products.selectedProduct)
    const { width } = useWindowDimensions();

    const addToCard = () => {

    }

    return (
        <View>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                {/* Top Images */}
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width: width, aspectRatio: 1 }} />
                    )}
                    horizontal
                    //showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />
                {/* Details */}
                <View style={{ padding: 20 }}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>
            {/* Add Card Button */}
            <Pressable onPress={addToCard} style={styles.button}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>


        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    name: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 2
    },
    description: {
        fontSize: 18,
        fontWeight: '300',
        lineHeight: 30,
        marginVertical: 10
    },
    button: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'black',
        alignSelf: 'center',
        width: '80%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    }
})