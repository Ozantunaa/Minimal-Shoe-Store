import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'

const FavoritesScreen = () => {
    const cart = useSelector((state) => state.cart.items)

    return (
        <>
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartListItem cartItem={item} />} />
        </>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({

})