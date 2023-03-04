import { FlatList, StyleSheet, Text, View } from 'react-native'
import CartListItem from '../components/CartListItem'
import cart from '../data/cart'
const CartScreen = () => {
    return (
        <FlatList data={cart}
            renderItem={({ item }) => <CartListItem cartItem={item} />}
            ListFooterComponent={() => (
                <View style={styles.totalContainer}>
                    <View style={styles.total}>
                        <Text style={styles.text}>total</Text>
                        <Text style={styles.text}>400.0$</Text>
                    </View>
                </View>
            )} />
    );
}

export default CartScreen

const styles = StyleSheet.create({
    totalContainer: {
        margin: 20,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
        paddingTop: 10
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: 'gray',
        fontSize: 16
    }
})