import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const EmptyCart = () => {
    return (
        <View style={styles.container}>
             <FontAwesome5 name='shopping-cart' size={100} color='gray' />
             <Text style={styles.text}>There are no items in your cart.</Text>
        </View>
    )
}

export default EmptyCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize:20,
        marginTop:16,
        color:'gray'
    }
})