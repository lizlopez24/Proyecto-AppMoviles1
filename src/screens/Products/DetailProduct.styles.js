import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    image:{
        resizeMode:"contain",
        height:350,
        width:"100%",
        marginTop:20,
        alignItems:"center",
    },
    content:{
        backgroundColor:"white",        
    },
    title:{
        fontWeight:"bold",
        fontSize:30,
        textAlign:"center",
        marginBottom:20,
    },
    description:{
        fontSize:15,
        textAlign:"center",
        marginBottom:20,
        marginHorizontal: 20,
    },
    details:{
        fontWeight:"bold",
        fontSize:15,
        textAlign:"left",
        marginBottom:20,
        marginHorizontal:20,
    }
});