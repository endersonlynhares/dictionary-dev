import { ReactNode, createContext, useState } from "react";
import axios from "axios"

interface Definition{
  definition: string,
  example: string,
  synonyms: [] | null,
  antonyms: [] | null
}

interface Meaning{
  partOfSpeech: string, 
  definitions: Array<Definition>
}

interface Word{
  word: string, 
  origin: string,
  meanings: Array<Meaning>
}


interface APIContextType{
  sendAPI: (newWord: string) => void
  data: Array<Word> | null
}

interface APIContextProviderProps{
  children: ReactNode
}

export const APIContext = createContext({} as APIContextType)

export const APIContextProvider = ({children}: APIContextProviderProps) =>{

  const [data, setData] = useState(null);

  async function sendAPI(newWord: string){
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`)
    .then(response => setData(response.data))
  }


  return(
    <APIContext.Provider value={{data, sendAPI}}>
      {children}
    </APIContext.Provider>
  )
}