import React from "react";
import GlobalContext from "./GlobalContext";

const GlobalProvider=({children})=>{

    const productCart=[]

    const addCart=(product)=>{
        productCart.push(product);
        console.log(product);
    };
    return(
        <GlobalContext.Provider value={[productCart,addCart]}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;