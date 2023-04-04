import { DictionaryContainer } from "./styles"
import Play from "../../assets/play.svg"
import { Meaning } from "../Meaning"

export const Dictionary = () =>{
  return(
    <DictionaryContainer>
        <header>
          <div>
            <h1>Hello</h1>
            <span>/hə&apos;ləʊ/</span>
          </div>
          <button>
            <img src={Play} alt="botão de fonetica" />
          </button>
        </header>
        <Meaning />
        <Meaning />
    </DictionaryContainer>
  )
}