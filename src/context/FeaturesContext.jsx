import React, { createContext } from "react";
import featuresData from "../components/assets/featuresData.js";

export const FeaturesContext = createContext(null);

const FeaturesContextProvider =(props) =>{
    const contextValue = { 
        featuresData
    };
    return(
        <FeaturesContext.Provider value={contextValue}>
            {props.children}
        </FeaturesContext.Provider>
    )
}
export default FeaturesContextProvider;

