import { createContext } from "react";

interface APIContextType{
  word: string,
}

export const APIContext = createContext({} as APIContextType)

export const APIContextProvider = ({children}) =>{

  const word = 'enderson';

  <APIContext.Provider value={{word}}>
    {children}
  </APIContext.Provider>
}