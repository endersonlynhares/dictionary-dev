import { MagnifyingGlass } from "phosphor-react"
import { SearchContainer } from "./styles"
import { useForm } from "react-hook-form"

interface DataForm {
  word: string
}

export const Search = () =>{

  const {register, handleSubmit} = useForm<DataForm>()

  const onSubmit = (data: DataForm) =>{
    console.log(data.word)
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