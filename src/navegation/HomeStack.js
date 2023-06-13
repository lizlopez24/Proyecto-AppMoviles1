import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Stack=createNativeStackNavigator();
const HomeStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.home.home}
            component={HomeScreen}
            options={{title:"Inicio"}}
            />
        </Stack.Navigator>
    )
};

export default HomeStack;