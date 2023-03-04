import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CartListItem from '../components/CartListItem'
import cart from '../data/cart'
import CartListFooter from '../components/CartListFooter'

const CartScreen = () => {
    return (
        <>
            <FlatList data={cart}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={CartListFooter} />

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    );
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