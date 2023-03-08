import { FlatList, StyleSheet, Image, View, Text, Pressable } from 'react-native'
import { useSelector } from 'react-redux'
import { productsSlice } from '../store/productsSlice'
import { useDispatch } from 'react-redux'

const RenderImage = ({ item, navigation }) => {

    const dispatch = useDispatch()

    const storyDetail = () => {
        dispatch(productsSlice.actions.setSelectedProduct(item.id))
        navigation.navigate('Product Detail')
    }
    return (
        <Pressable onPress={storyDetail} style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name.length > 12 ? item.name.slice(0,10) + "..." : item.name}</Text>
        </Pressable>
    )
}

const HomeHeaderList = ({ navigation }) => {

    const products = useSelector((state) => state.products.products)

    return (
        <FlatList
            data={products.slice(-6)}
            renderItem={({ item }) => <RenderImage item={item} navigation={navigation} />}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default HomeHeaderList

const styles = StyleSheet.create({
    image: {
        height: 64,
        width: 64,
        borderRadius: 64,
        margin: 6
    },
    itemContainer: {
        flex: 1,
        margin: 8,
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        color: 'gray'
    }
})