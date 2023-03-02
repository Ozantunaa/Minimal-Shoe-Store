import { Image, StyleSheet, View } from 'react-native'

const RenderItem = ({item}) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image}
            />
        </View>
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