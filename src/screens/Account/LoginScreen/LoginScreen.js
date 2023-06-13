import React from 'react'
import { View, Text } from 'react-native'
import LoginForm from '../../../components/Auth/LoginForm/LoginForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Image } from '@rneui/themed';
import { styles } from './LoginScreen.styles';

const LoginScreen=()=> {
  return (
    <KeyboardAwareScrollView>
      <Image 
      source={require("../../../../assets/img/login.png")}
      style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
      </View>
    </KeyboardAwareScrollView>
      
  )
};

export default LoginScreen;