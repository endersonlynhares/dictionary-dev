import { MeaningContainer } from "./styles"

interface Definition{
  definition: string,
  example: null | string,
  synonyms: string[] | null,
  antonyms: string[] | null
}

interface MeaningType{
  partOfSpeech: string, 
  definitions: Array<Definition>
  synonyms: string[] | null,
  antonyms: string[] | null
}

interface MeaningProps {
  dataMeaning: MeaningType
}

export const Meaning = ({dataMeaning}:MeaningProps) =>{

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
                  <li>{definition.definition}</li>
                  <ul>
                    {definition.example && definition.example.length > 0 ? <li>{definition.example}</li> : null}

                    {definition.synonyms && definition.synonyms.length > 0 ? <li>{definition.synonyms}</li> : null}

                    {definition.antonyms && definition.antonyms.length > 0 ? <li>{definition.antonyms}</li> : null}
                    
                  </ul>
                  
                </ul>
              )
            })
          }
        </ul>
      </div>
    </MeaningContainer>
  )
}
