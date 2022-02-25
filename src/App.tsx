import { useMenu } from './context/menuContext';

//Components
import Header from './components/Header';
import Routing from './routing/Routing';
import Footer from './components/Footer';
import Menu from './components/Menu';

//Styling
import { ThemeProvider } from 'styled-components';
import './default.css'

const theme = {
  color: {
    backgroundWhite: "#F5F1EC",
    backgroundDarker: "#E4DBD9",
    backgroundBlack: "#1B1B1B",
    fontBrown: "#877673",
    fontOrange: "#EA703B", //It can change to the brand's actual colors
    greyLighter: "#ADABA8",
    greyDarker: "#656565"
  },
  font: {
    fontSecundary: "Diot",
    fontTerciary: "'Cormorant Upright', serif",
  }
}

const App: React.FC = () => {
  const { isOpen } = useMenu()

  return (
    <ThemeProvider theme={theme}>
      {isOpen ? <Menu /> : ''}
      <Header />
      <main className="main">
        <Routing />
      </main>
      {/* <Footer /> */}
    </ThemeProvider>
  )
}

export default App;
