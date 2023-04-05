import { DictionaryContainer } from "./styles"
import Play from "../../assets/play.svg"
import { Meaning } from "../Meaning"
import { useContext } from "react"
import { APIContext } from "../../contexts/APIContext"

export const Dictionary = () => {

  const { data } = useContext(APIContext)

  const meanings = data && data[0].meanings.map(meaning =>{
    return(
      <Meaning dataMeaning={meaning} key={meaning.partOfSpeech} />
    )
  })

  console.log(data && data[0].meanings)

  return (
    <DictionaryContainer>
      {
        data ? (
          <header>
            <div>
              <h1>{data != null && data[0].word}</h1>
              <span>/hə&apos;ləʊ/</span>
            </div>
            <button>
              <img src={Play} alt="botão de fonetica" />
            </button>
          </header>
          ) 
        : "Digite uma palavra"
      }
     {meanings}
    </DictionaryContainer>
  )


}