import { useMenu } from './context/menuContext';
import { useTheme } from './context/themeContext';

//Components
import Header from './components/Header';
import Routing from './routing/Routing';
import Footer from './components/Footer';
import Menu from './components/Menu';

//Styling
import { ThemeProvider } from 'styled-components';
import { Main, GlobalStyle } from './globalStyles';
import './default.css'

const themeLight = {
  color: {
    backgroundMain: "#F5F1EC",
    backgroundDarker: "#E4DBD9",
    fontMain: "#877673",
    fontOrange: "#ff670f",
    reverseColor: "#1B1B1B",
    reverseHover: "#000000"
  },
  font: {
    fontSecundary: "Diot",
    fontTerciary: "'Cormorant Upright', serif",
  }
}

const themeDark = {
  color: {
    backgroundMain: "#1B1B1B",
    backgroundDarker: "#E4DBD9",
    fontMain: "#F5F1EC",
    fontOrange: "#ff670f",
    reverseColor: "#877673",
    reverseHover: "#695f5d",
  },
  font: {
    fontSecundary: "Diot",
    fontTerciary: "'Cormorant Upright', serif",
  }
}

const App: React.FC = () => {
  const { isLight } = useTheme()
  const { isOpen } = useMenu()

  return (
    <ThemeProvider theme={isLight ? themeLight : themeDark}>
      {isOpen ? <Menu /> : ''}
      <Header />
      <Main>
        <Routing />
      </Main>
      <GlobalStyle isOpen={isOpen}/>
    </ThemeProvider>
  )
}

export default App;
