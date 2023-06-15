import React, { useContext } from "react";
import { Text, ScrollView} from "react-native";
import GlobalContext from "../components/Global/GlobalContext";
import { Avatar, ListItem } from '@rneui/themed';
import { styles } from "./CartScreen.styles";

const CartScreen=()=> {
    const [productCart, addCart]=useContext(GlobalContext);
    let total=0;
    return(
        
        <ScrollView backgroundColor="white"> 
            <Text style={styles.title}>Productos Añadidos</Text>
        {productCart.map((item)=>{
            total=(item.product.totalCount*item.product.price)+total;
            return(
                <ListItem key={item.product.id}>
                        <Avatar source={item.product.img} /> 
                        <ListItem.Content>
                            <ListItem.Title>{item.product.name}</ListItem.Title>
                            <ListItem.Subtitle>Cantidad: {item.product.totalCount}</ListItem.Subtitle>
                            <ListItem.Subtitle>Precio: ${item.product.price*item.product.totalCount}</ListItem.Subtitle>
                        </ListItem.Content>
                </ListItem>
            )
})}
    <Text style={styles.total}>Total a pagar : ${total}</Text>
    </ScrollView>
    )
};

export default CartScreen;