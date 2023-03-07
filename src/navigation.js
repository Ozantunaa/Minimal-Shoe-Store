import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import CartScreen from './screens/CartScreen';
import ProductDetail from './screens/ProductDetail'
import CartButton from './components/CartButton';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'white' }}}>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <CartButton navigation={navigation} />
                        )
                    })} />
                <Stack.Screen name='Cart' component={CartScreen} />
                <Stack.Screen name='Product Detail' component={ProductDetail} options={{ presentation: 'modal' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation