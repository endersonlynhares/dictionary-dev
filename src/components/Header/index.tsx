import { BookBookmark, Sun, Moon } from "phosphor-react"
import { HeaderContainer } from "./styles"
import { useTheme } from "styled-components"
import Switch from "react-switch"

export const Header = () => {

  const {title, colors} = useTheme()

  return (
    <HeaderContainer>
      <BookBookmark size={38} />

      <div>

        <Switch
          onChange={() => console.log()}
          checked={title === "light" ? true : false}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor={colors["primary-100"]}
          height={15}
        />

        <Sun size={20} />
      </div>

    </HeaderContainer>
  )
}