import React from 'react'
import { View, Text } from 'react-native';
import { Image } from '@rneui/base';
import {styles} from "./RegisterScreen.styles"
import RegisterForm from "../../../components/Auth/RegisterForm";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const RegisterScreen=()=> {
  return (
    <KeyboardAwareScrollView>
      <Image 
      source={require("../../../../assets/img/login.png")}
      style={styles.image}
      />
      <View style={styles.content}>
      <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  )
};

export default RegisterScreen;