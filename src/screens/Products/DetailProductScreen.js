import React from 'react'
import { View, Text } from 'react-native'
import { Image } from '@rneui/themed';
import { styles, image } from './DetailProduct.styles';
import { ScrollView } from 'react-native';

const DetailProductScreen=({route})=> {
    const product=route.params;
  return (
    <ScrollView style={styles.content}>
    <View >
      <Text style={styles.title}>{product.name}</Text>
      <Image style={styles.image} source={product.img} />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.details}>Rinde para: {product.portions} personas</Text>
      <Text style={styles.details}>Precio: $ {product.price}</Text>
    </View>
    </ScrollView>
  )
}
export default DetailProductScreen;