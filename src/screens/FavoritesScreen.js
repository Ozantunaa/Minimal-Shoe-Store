import { FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import EmptyFavorites from '../components/EmptyFavorites'
import FavoritesList from '../components/FavoritesList'

const FavoritesScreen = () => {
    
    const favorites = useSelector((state) => state.favorites.selectedFavorites)

    return (
        <>
            {favorites.length === 0 ? (
                <EmptyFavorites />
            ) : (
                <FlatList
                    data={favorites}
                    renderItem={({ item }) => <FavoritesList favoritesItem={item} />}
                    numColumns={2}
                />
            )}
        </>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({

})