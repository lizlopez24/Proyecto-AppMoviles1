import React from 'react'
import { View, Text } from 'react-native'
import { Image } from '@rneui/themed';
import { styles } from './UserLogged.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const UserLoggedScreen =()=> {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.content}>
        <Text style={styles.title}>Hola usuario</Text>
        <Text style={styles.title}>Bienvenido a ChocoPeca</Text>
      </View>
      <Image 
      source={require("../../../assets/img/logoColor.png")}
      style={styles.image}
      />
    </KeyboardAwareScrollView>
  )
};

export default UserLoggedScreen;