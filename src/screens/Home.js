import { StyleSheet, FlatList, View, Text, ScrollView } from 'react-native'
import RenderItem from '../components/RenderItem'
import { useSelector } from 'react-redux'
import HomeHeaderList from '../components/HomeHeaderList'

const Home = ({ navigation }) => {

    const products = useSelector((state) => state.products.products)

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <RenderItem item={item} navigation={navigation} />}
                numColumns={2}
                ListHeaderComponent={<HomeHeaderList navigation={navigation} />}
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