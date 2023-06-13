import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    overlay:{
        height:100,
        width:100,
        backgroundColor: "#ffffff",
        borderColor:"#F188EA",
        borderWidth:2,
        borderRadius:10,
    },

    view:{
        flex:1,
        alingItems:"center",
        justifyContent:"center",

    },
    text:{
        color:"#F188EA",
        textTransform:"uppercase",
        marginTop:10,
    },
});