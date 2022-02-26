import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter } from 'react-router-dom'

//Context APIs
import { MenuProvider } from './context/menuContext'
import { ThemeProvider } from './context/themeContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
