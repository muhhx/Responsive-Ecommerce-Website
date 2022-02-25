import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeContext } from 'styled-components'
import App from './App'

//Context APIs
import { MenuProvider } from './context/menuContext'
import { ThemeProvider } from './context/themeContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
