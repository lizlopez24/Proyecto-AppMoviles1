import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import {screen} from "../utils/screenName";
import ProductsStack from "./ProductsStack";
import CartStack from "./CartStack";
import AccountStack from "./AccountStack";
import HomeStack from "./HomeStack";

const Tab=createBottomTabNavigator();

export const AppNavigation=()=>{
    return(
        <Tab.Navigator screenOptions={({route})=>({
            headerShown:false,
            tabBarInactiveTintColor:"#646464",
            tabBarActiveTintColor:"#20B5F1",
            tabBarIcon:({color,size})=>screenOptions(route,color,size)
        })}
        >
            <Tab.Screen 
            name={screen.home.tab}
            component={HomeStack}
            options={{title:"Inicio"}}
            />
            <Tab.Screen 
            name={screen.products.tab} 
            component={ProductsStack}
            options={{title:"Productos"}}
            />
            <Tab.Screen 
            name={screen.cart.tab}
            component={CartStack}
            options={{title:"Carrito"}}
            />
            <Tab.Screen 
            name={screen.account.tab}
            component={AccountStack}
            options={{title:"Cuenta"}}
            />
        </Tab.Navigator>
    )
};

const screenOptions=(route,color,size)=>{
    let iconName;
    if(route.name==screen.home.tab){
        iconName="home-outline"
    }
    if(route.name==screen.products.tab){
        iconName="candy"
    }
    if(route.name==screen.cart.tab){
        iconName="cart-variant"
    }
    if(route.name==screen.account.tab){
        iconName="account-circle-outline"
    }
    return(
        <Icon 
        type="material-community"
        name={iconName}
        color={color}
        size={size}
        />
    )
}