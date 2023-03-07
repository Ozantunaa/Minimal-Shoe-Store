import { Pressable, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

const CartButton = ({ navigation }) => {
    
    const goToCart = () => navigation.navigate('Cart');

    return (
        <Pressable onPress={goToCart} style={styles.button}>
            <FontAwesome5 name='shopping-cart' size={20} color='gray' />
            <Text style={styles.text} >1</Text>
        </Pressable>
    )
}

export default CartButton

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        marginLeft: 10
    },
})