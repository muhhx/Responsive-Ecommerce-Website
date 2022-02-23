//Components
import Navbar from './components/Navbar';
import Routing from './routing/Routing';
import Footer from './components/Footer';

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
    fontSecundary: "'Cormorant Upright', serif",
  }
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routing />
      <Footer />
    </ThemeProvider>
  )
}

export default App;
