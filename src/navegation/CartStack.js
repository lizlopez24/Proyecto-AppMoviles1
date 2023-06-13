import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import CartScreen from "../screens/CartScreen";

const Stack=createNativeStackNavigator();

const CartStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.cart.cart}
            component={CartScreen}
            options={{title:"Carrito"}}
            />
        </Stack.Navigator>
    )
};

export default CartStack;