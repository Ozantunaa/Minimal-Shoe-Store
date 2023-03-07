import { Pressable, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { numberSelectItems } from '../store/cartSlice';

const CartButton = ({ navigation }) => {

    const numberOfSelectItems = useSelector(numberSelectItems);
    const goToCart = () => navigation.navigate('Cart');

    return (
        <Pressable onPress={goToCart} style={styles.button}>
            <FontAwesome5 name='shopping-cart' size={20} color='gray' />
            <Text style={styles.text}>{numberOfSelectItems}</Text>
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
        color: 'gray',
        marginLeft: 10,
        fontWeight:'500'
    },
})