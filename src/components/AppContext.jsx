import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider =(props) =>{

    const phone = "+1 9876543210"
    const phone2 = "+1 123456789"
    const name = "Elon"
    const name2 = "Musk"
    return(
        <AppContext.Provider value={{phone, phone2, name, name2}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider