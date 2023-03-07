import { Image, Pressable, StyleSheet } from 'react-native'

const RenderItem = ({ item, navigation }) => {

    const goToDetail = () => navigation.navigate('Product Detail');

    return (
        <Pressable onPress={goToDetail} style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
    );
};

export default RenderItem

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 1
    },
    itemContainer: {
        width: '50%',
        padding: 1
    }
})