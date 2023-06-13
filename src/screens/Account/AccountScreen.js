import React from "react";
import { View, Text } from "react-native";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import UserLoggedScreen from "./UserLoggedScreen";
import UserGuestScreen from "./UserGuestScreen/UserGuestScreen";
import LoadingModal from "../../components/Shared/LoadingModal/LoadingModal";

const AccountScreen=()=>{
    const[hasLogged, setHasLogged]=useState(null);

    useEffect(()=>{
        const auth=getAuth();
        onAuthStateChanged(auth,(user)=>{
            setHasLogged(user!=null ? true : false)
        });
    },[]);

    if(hasLogged==null){
        return <LoadingModal show={true} text="Cargando" />
    };

    return hasLogged==true ? < UserLoggedScreen/> : < UserGuestScreen/>
};

export default AccountScreen;