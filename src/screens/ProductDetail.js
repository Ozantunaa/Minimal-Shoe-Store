import { Alert, Pressable, ScrollView } from 'react-native';
import { Image, StyleSheet, View, FlatList, useWindowDimensions, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { cartSlice } from '../store/cartSlice';
import { favoritesSlice } from '../store/favoritesSlice';
import { FontAwesome5, Ionicons } from '@expo/vector-icons'

const ProductDetail = () => {

    const product = useSelector((state) => state.products.selectedProduct);
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();
    
    const isFavorite = useSelector((state) =>
        state.favorites.selectedFavorites.some((favorite) => favorite.product.id === product.id)
    );

    const addToCard = () => {
        dispatch(cartSlice.actions.addCartItem({ product }))
        Alert.alert('The product has been added to your cart')
    };

    const addToFavorite = () => {
        if (isFavorite) {
          dispatch(favoritesSlice.actions.removeSelectedFavorite({ product }));
        } else {
          dispatch(favoritesSlice.actions.addSelectedFavorite({ product }));
        }
      };
      
    return (
        <View>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width: width, aspectRatio: 1 }} />
                    )}
                    horizontal
                    pagingEnabled />
                <View style={{ padding: 20 }}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{product.name}</Text>
                        <Pressable onPress={addToFavorite}>
                            {isFavorite ? <Ionicons name='heart' color='red' size={24} /> :
                                <FontAwesome5 name='heart' size={20} />}
                        </Pressable>
                    </View>
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
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 1
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