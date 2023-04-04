import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components"
import { light } from "./styles/theme/light"
import { dark } from "./styles/theme/dark"
import { Container } from "./styles"
import { Header } from "./components/Header"
import { Search } from "./components/Search"
import { Dictionary } from "./components/Dictionary"
import { useState } from "react"
import { ThemeContext } from "./contexts/ThemeContext"

function App() {

  const [theme, setTheme] = useState(light)
  const toggleTheme = () =>{
    setTheme(theme.title === "light"? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>

      <ThemeContext.Provider value={{toggleTheme}}>
        <Container>
            <Header />
            <Search />
            <Dictionary />
        </Container>
      </ThemeContext.Provider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
