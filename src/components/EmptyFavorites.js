import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const EmptyFavorites = () => {

    return (
    <View style={styles.container}>
             <Ionicons name='heart' size={100} color='gray' />
             <Text style={styles.text}>There are no products in your favorites.</Text>
        </View>
  )
}

export default EmptyFavorites

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize:18,
        marginTop:12,
        color:'gray'
    }
})