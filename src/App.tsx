import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components"
import { light } from "./styles/theme/light"
import { Container } from "./styles"
import { Header } from "./components/Header"

function App() {
  return (
    <ThemeProvider theme={light}>

      <Container>
          <Header />
      </Container>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
