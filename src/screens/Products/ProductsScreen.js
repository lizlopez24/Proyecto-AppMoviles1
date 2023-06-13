import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Avatar, ListItem } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils/screenName";
import { image } from './DetailProduct.styles';

const ProductsScreen=()=>{
    const navigation=useNavigation();
    const products=[
        {
            id: 1,
            name:"Pastel 1 piso",
            description:"Pastel de 1 piso, personalizable de acuerdo a la temática. El cake es de chocholate con relleno de crema, fresas y mermelada de mora. Su decoración es de crema Chantilly",
            portions: 20,
            price: 25,
            img:require('../../../assets/img/id1.png'),
        },
        {
            id: 2,
            name:"Pastel 2 pisos",
            description:"Pastel de 2 pisos, personalizable de acuerdo a la temática. El cake es de vainilla con un relleno de crema, durazno y mermelada y su decoración es hecha con fondant",
            portions: 30,
            price: 37,
            img:require('../../../assets/img/id2.png'),
        },
        {
            id: 3,
            name:"Pastel 3 pisos",
            description:"Pastel de 3 pisos, personalizable de acuerdo a la temática. El cake puede ser de chocolate, tiene un relleno de crema con fruta y su decoración es hecha con fondant",
            portions: 50,
            price: 63,
            img:require('../../../assets/img/id3.png'),
        },
        {
            id: 4,
            name:"Pastel de bodas",
            description:"Pastel de bodas de 4 pisos. El cake es de babaco con nuez y está mojado con almibar de fruta. Su decoración es hecha con fondant, acabados tipo encaje y flores comestibles de azucar",
            portions: 100,
            price: 125,
            img:require('../../../assets/img/id4.png'),
        },
        {
            id: 5,
            name:"Pastel Personalizado",
            description:"El pastel personalizado se realiza de acuerdo a la temática que se quiera representar, por lo que sus pisos variarán de acuerdo a la misma. El modelo presentado está inspirado en una propuesta de matrimonio, realizada en un globo aerostático sobre las montañas y en los dos novios, representados con sus carreras en la parte inferior. La decoración es hecha con fondant y el cake es una combinación de cake marmoleado y arroz inflable.",
            portions: 100,
            price: 250,
            img:require('../../../assets/img/id5.png'),
        },
        {
            id: 6,
            name:"Jarro relleno de dulces",
            description:"Jarro de cerámica con forma de muñeco de nieve. Contiene: 6 chocolates rellenos, 2 paletas de chocolate blanco y negro con arroz crocante, galletas de chispas de chocolate, galletas de limon, tango con relleno de ron y barra de chocolate con maní",
            portions: 1,
            price: 8,
            img: require('../../../assets/img/id6.png'),
        },
        {
            id: 7,
            name:"Caramelo relleno de dulces",
            description:"Contenedor de cerámica con forma de caramelo. Contiene 6 chocolates rellenos, 2 paletas de chocolate blanco y negro con arroz crocante, galletas de chispas de chocolate, galletas de limon, tango con relleno de ron y barra de chocolate con maní",
            portions: 1,
            price: 6,
            img: require('../../../assets/img/id7.png'),
        },
        {
            id: 8,
            name:"Chocobombas",
            description:"Chocobombas para derretir en leche caliente, de 4 sabores: Mocca, vainilla, fresa y capuccino. La decoración de cada chocobomba puede variar",
            portions: 4,
            price: 8,
            img: require('../../../assets/img/id8.png'),
        },
        {
            id: 9,
            name:"Jarro personalizado con chocobomba",
            description:"Jarro de cerámica personalizable con cualquier imagen o texto y chocomba de sabor a elegir entre: Mocca, vainilla, fresa y capuccino.",
            portions: 1,
            price: 8,
            img: require('../../../assets/img/id9.png'),
        },

    ];

    return(
        <ScrollView>
            {products.map((product)=>{
                return(
                    <ListItem key={product.id} onPress={()=>navigation.navigate(screen.products.detailProduct, product)}>
                            <Avatar source={product.img} /> 
                            <ListItem.Content>
                                <ListItem.Title>{product.name}</ListItem.Title>
                                <ListItem.Subtitle>Para {product.portions} personas</ListItem.Subtitle>
                            </ListItem.Content>
                    </ListItem>
                )
})}
        </ScrollView>
    )
}

export default ProductsScreen;