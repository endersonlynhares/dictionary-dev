import { MeaningContainer } from "./styles"

interface Definition{
  definition: string,
  example: string,
  synonyms: [] | null,
  antonyms: [] | null
}

interface MeaningType{
  partOfSpeech: string, 
  definitions: Array<Definition>
}

interface MeaningProps {
  dataMeaning: MeaningType
}

export const Meaning = ({dataMeaning}:MeaningProps) =>{

  console.log(dataMeaning.definitions)

  return(
    <MeaningContainer>
      <h3><em>{dataMeaning.partOfSpeech}</em></h3>
      <div>
        <span>Meaning</span>      
        <ul>
          {
            dataMeaning.definitions.map(definition =>{
              return(
                <ul key={definition.definition}>
                  <li>{definition.antonyms}</li>
                  <li>{definition.definition}</li>
                  <li>{definition.example}</li>
                  <li>{definition.synonyms}</li>
                </ul>
              )
            })
          }
        </ul>
      </div>
    </MeaningContainer>
  )
}