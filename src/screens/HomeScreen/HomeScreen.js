import React from 'react'
import { View, ScrollView } from 'react-native';
import { Text, Image } from '@rneui/base';
import { styles } from './HomeScreen.styles';

const HomeScreen=()=> {
  return (
    <ScrollView style={styles.viewBody}>
        <Image 
        source={require("../../../assets/img/LogoChocoPeca.png")}
        style={styles.image}
        />
      <View>
        <Text style={styles.description}>ChocoPeca es un emprendimiento dedicado a la elaboración de pasteles personalizados y chocolates artesanales para toda ocasion. </Text>
        <Text style={styles.description}>Hechos con ingredientes naturales y de la mejor calidad</Text>
      </View>
    </ScrollView>
  )
};

export default HomeScreen;