import { ScrollView } from 'react-native';
import { Image, StyleSheet, View, FlatList, useWindowDimensions, Text } from 'react-native'
import products from '../data/products'

const ProductDetail = () => {
    const product = products[0];
    const { width } = useWindowDimensions()

    return (
        <View>
            <ScrollView>
                {/* Top Images */}
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width: width, aspectRatio: 1 }} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
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
})