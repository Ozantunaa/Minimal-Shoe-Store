import { FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import FavoritesList from '../components/FavoritesList'

const FavoritesScreen = () => {
    const favorites = useSelector((state) => state.favorites.selectedFavorites)

    return (
        <>
            <FlatList
                data={favorites}
                renderItem={({ item }) => <FavoritesList favoritesItem={item} />}
                numColumns={2}
                />
        </>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({

})