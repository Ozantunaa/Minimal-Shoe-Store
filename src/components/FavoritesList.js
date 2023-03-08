import {StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { productsSlice } from "../store/productsSlice";
import { useDispatch } from 'react-redux'

const FavoritesList = ({ favoritesItem }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const favoriteDetail = () => {
        dispatch(productsSlice.actions.setSelectedProduct(favoritesItem.product.id))
        navigation.navigate('Product Detail')
    }

    return (
        <Pressable onPress={favoriteDetail} style={styles.container}>
            <Image source={{ uri: favoritesItem.product.image }} style={styles.image} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 1
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
});

export default FavoritesList;
