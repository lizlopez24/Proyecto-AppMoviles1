import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/screenName";
import ProductsScreen from "../screens/Products/ProductsScreen";
import DetailProductScreen from "../screens/Products/DetailProductScreen";

const Stack=createNativeStackNavigator();

const ProductsStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.products.products}
            component={ProductsScreen}
            options={{title:"Productos"}}
            />
            <Stack.Screen 
            name={screen.products.detailProduct}
            component={DetailProductScreen}
            options={{title:"Detalle del Producto"}}
            />
        </Stack.Navigator>
    )
};

export default ProductsStack;