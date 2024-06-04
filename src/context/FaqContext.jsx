import React, { createContext } from "react";
import faqData from "../components/assets/faqData.js";

export const FaqContext = createContext(null);

const FaqContextProvider =(props) =>{
    const contextValue = { 
         faqData
    };
    return(
        <FaqContext.Provider value={contextValue}>
            {props.children}
        </FaqContext.Provider>
    )
}
export default FaqContextProvider;

