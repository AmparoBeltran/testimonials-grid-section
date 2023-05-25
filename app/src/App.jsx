import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import MainContainer from "./MainContainer"


const theme = {
  colors: {

    //### Primary
    moderateViolet: 'hsl(263, 55%, 52%)',
    veryDarkgrayishBlue: ' hsl(217, 19%, 35%)',
    veryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
    white: 'hsl(0, 0%, 100%)',

    //### Neutral
    lightGray: 'hsl(0, 0%, 81%)',
    lightGrayishBlue: 'hsl(210, 46%, 95%)',
  },

  desktop: '1440px'

}


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App
