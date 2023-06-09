import { MagnifyingGlass } from "phosphor-react"
import { SearchContainer } from "./styles"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { APIContext } from "../../contexts/APIContext"

interface DataForm {
  word: any
}

export const Search = () =>{

  const {register, handleSubmit} = useForm<DataForm>()
  const {sendAPI} = useContext(APIContext)

  const onSubmit = (data: DataForm) =>{
    sendAPI(data.word)
  }

  return(
    <SearchContainer onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("word")} />
      <button>
        <MagnifyingGlass size={18} weight="bold" />
      </button>
    </SearchContainer>
  )
}
