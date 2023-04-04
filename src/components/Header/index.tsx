import { BookBookmark, Sun, Moon } from "phosphor-react"
import { HeaderContainer } from "./styles"
import { useTheme } from "styled-components"
import Switch from "react-switch"
import { ThemeContext } from "../../contexts/ThemeContext"
import { useContext } from "react"

export const Header = () => {

  const {title, colors} = useTheme()
  const {toggleTheme} = useContext(ThemeContext)

  return (
    <HeaderContainer>
      <BookBookmark size={38} />

      <div>

        <Switch
          onChange={toggleTheme}
          checked={title === "dark" ? true : false}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={colors["gray-500"]}
          onColor={colors["primary-500"]}
          height={20}
          width={45}
          handleDiameter={13}
        />

        {title == "light" ? <Sun size={20} /> : <Moon size={20} />}
      </div>
    </HeaderContainer>
  )
}