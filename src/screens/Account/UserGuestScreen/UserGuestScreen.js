import React from 'react'
import { View, ScrollView} from 'react-native'
import { Text, Button, Image } from '@rneui/base';
import { styles } from './UserGuestScreen.styles';
import { screen } from '../../../utils/screenName';
import { useNavigation } from '@react-navigation/native';

const UserGuestScreen=()=> {
  const navegation=useNavigation();

  const goToLogin=()=>{
    navegation.navigate(screen.account.login)
  };
  const goToRegister=()=>{
    navegation.navigate(screen.account.register)
  };

  return (
    <ScrollView
    contentContainerStyle={{flex:1, justifyContent:"center", backgroundColor: "#F8F0FA"}}
    >
      <Image 
      source={require ("../../../../assets/img/login.png")}
      style={styles.image}
      />
    <Text style={styles.title}>¿Ya tienes cuenta?</Text>
    <Button title="Iniciar Sesión" onPress={goToLogin} buttonStyle={styles.btnStyle}/>
    <Text style={styles.title}>¿Aún no?</Text>
    <Button title="Registrate!" onPress={goToRegister} buttonStyle={styles.btnStyle}/>

    </ScrollView>
  )
};

export default UserGuestScreen;