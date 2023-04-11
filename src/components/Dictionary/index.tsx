import { DictionaryContainer } from "./styles"
import { Meaning } from "../Meaning"
import { useContext } from "react"
import { APIContext } from "../../contexts/APIContext"
import ReactAudioPlayer from 'react-audio-player'

export const Dictionary = () => {

  const { data } = useContext(APIContext)

  return (
    <DictionaryContainer>
      {
        data ? (
          <header>
            <div>
              <h1>{data != null && data[0].word}</h1>
              <span>{data && data[0].phonetic}</span>
            </div>
            {/* <button>
              <img src={Play} alt="botão de fonetica" />
            </button> */}
            <ReactAudioPlayer
              src={data && data[0].phonetics[0].audio}
              controls
            />
          </header>
        )
          : "Digite uma palavra"
      }
      {
        data && data[0].meanings.map((meaning:any) => {
        return (
          <Meaning dataMeaning={meaning} key={meaning.partOfSpeech} />
        )
      })}

    </DictionaryContainer>
  )


}
