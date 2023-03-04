import { StyleSheet, Text, View } from 'react-native'

const CartListFooter = () => {
  return (
    <View style={styles.totalContainer}>
        <View style={styles.total}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>400.0$</Text>
        </View>
        <View style={styles.total}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>15.0$</Text>
        </View>
        <View style={styles.total}>
            <Text style={styles.boldText}>Total</Text>
            <Text style={styles.boldText}>400.0$</Text>
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
        paddingTop: 10
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