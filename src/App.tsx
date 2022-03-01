//Contexts
import { useMenu } from './context/menuContext';
import { useTheme } from './context/themeContext';
import { useUser } from './context/userContext';

//Components
import AdminHeader from './components/AdminHeader';
import Header from './components/Header';
import Routing from './routing/Routing';
import Menu from './components/Menu';

//Styling
import { themeDark, themeLight } from './helpers/themes';
import { Main, GlobalStyle } from './globalStyles';
import { ThemeProvider } from 'styled-components';
import './default.css'

const App: React.FC = () => {
  const { currentUserData } = useUser()
  const { isLight } = useTheme()
  const { isOpen } = useMenu()

  return (
    <ThemeProvider theme={isLight ? themeLight : themeDark}>
      {isOpen ? <Menu /> : ''}
      {currentUserData?.userRole === "admin" ? <AdminHeader /> : ''}
      <Header />
      <Main>
        <Routing />
      </Main>
      <GlobalStyle isOpen={isOpen}/>
    </ThemeProvider>
  )
}

export default App;
