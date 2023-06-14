import React, {useState} from 'react'
import { View, Text, useAnimatedValue } from 'react-native'
import { Image } from '@rneui/themed';
import { styles } from './DetailProduct.styles';
import { ScrollView } from 'react-native';
import { Button } from '@rneui/themed';

const DetailProductScreen=({route})=> {
    const product=route.params;
  
    const [count, setCount]=useState(0);
    const countClick=()=>{
      setCount(count>0 ? count-1 : 0)
    };
    const countClickM=()=>{
      setCount(count+1)
    };

    const[cartProduct, setCartProduct]=useState([]);

    const addList=()=>{
      setCartProduct(cartProduct.push(product))
      console.log(cartProduct)
    };
    

  return (
    <ScrollView style={styles.content}>
    <View >
      <Text style={styles.title}>{product.name}</Text>
      <Image style={styles.image} source={product.img} />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.details}>Rinde para: {product.portions} personas</Text>
      <Text style={styles.details}>Precio: $ {product.price}</Text>
      <Text style={styles.amount}>Cantidad</Text>
    </View>
    <View style={styles.count}>
      <Button 
        buttonStyle={styles.btnCount}
        icon={{type:"material-community", name:"arrow-left-drop-circle-outline"}} 
        onPress={countClick}
        /> 
      <Text>{count}</Text>
      <Button 
        buttonStyle={styles.btnCount}
        icon={{type:"material-community", name:"arrow-right-drop-circle-outline"}}
        onPress={countClickM}
        />
    </View>
    <View>
      <Button 
      title="Agregar al carrito" 
      onPress={addList}
      />
    </View>
    </ScrollView>
  )
}
export default DetailProductScreen;