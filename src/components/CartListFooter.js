import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { selectDeliveryPrice, selectSubTotal, selectTotal } from '../store/cartSlice'

const CartListFooter = () => {
    const subTotal = useSelector(selectSubTotal)
    const deliveryFee = useSelector(selectDeliveryPrice)
    const total = useSelector(selectTotal)
    return (
        <View style={styles.totalContainer}>
            <View style={styles.total}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>{subTotal}$</Text>
            </View>
            <View style={styles.total}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>{deliveryFee}$</Text>
            </View>
            <View style={styles.total}>
                <Text style={styles.boldText}>Total</Text>
                <Text style={styles.boldText}>{total}$</Text>
            </View>
        </View>
    )
}

export default CartListFooter

const styles = StyleSheet.create({
    totalContainer: {
        margin: 20,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
        paddingTop: 10,
        paddingBottom:80
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2
    },
    text: {
        color: 'gray',
        fontSize: 16
    },
    boldText: {
        fontSize: 16,
        fontWeight: '500'
    },
})