import { StyleSheet, FlatList, View } from 'react-native'
import RenderItem from '../components/RenderItem'
import {useSelector} from 'react-redux'

const Home = ({navigation}) => {
    
    const products = useSelector((state) => state.products.products)

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({item})=> <RenderItem item={item} navigation={navigation}/>}
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
})