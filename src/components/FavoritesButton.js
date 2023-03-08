import { Pressable} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const FavoritesButton = ({ navigation }) => {
    const goToFav = () => navigation.navigate('Favorites')
    return (
        <Pressable onPress={goToFav}>
            <FontAwesome5 name='heart' size={20} color='gray' />
        </Pressable>
    )
}

export default FavoritesButton