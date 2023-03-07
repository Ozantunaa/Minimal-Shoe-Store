import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CartListItem from '../components/CartListItem'
import CartListFooter from '../components/CartListFooter'
import { useSelector } from 'react-redux'
import EmptyCart from '../components/EmptyCart'

const CartScreen = () => {
    const cart = useSelector((state) => state.cart.items)

    return (
        <>
            {cart.length === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    <FlatList data={cart}
                        renderItem={({ item }) => <CartListItem cartItem={item} />}
                        ListFooterComponent={CartListFooter} />

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Checkout</Text>
                    </Pressable>
                </>
            )}
        </>
    )
}

export default CartScreen

const styles = StyleSheet.create({

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