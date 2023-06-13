import {AppNavigation} from "./src/navegation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import {initFirebase} from "./src/utils/firebase";

 const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    </>
  );
};

 export default App;