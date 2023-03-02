import { StyleSheet, FlatList, View } from 'react-native'
import products from '../data/products'
import RenderItem from '../components/RenderItem'

const Home = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={RenderItem}
                numColumns={2}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    itemContainer: {
        width: '50%',
        padding: 1
    }
})