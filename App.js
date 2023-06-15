import {AppNavigation} from "./src/navegation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import {initFirebase} from "./src/utils/firebase";
import Toast from "react-native-toast-message";
import GlobalProvider from "./src/components/Global/GlobalProvider";

 const App = () => {
  return (
    <>
      <GlobalProvider>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
      </GlobalProvider>
      <Toast />
    </>
  );
};

 export default App;