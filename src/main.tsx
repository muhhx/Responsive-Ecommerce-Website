import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter } from 'react-router-dom'

//Context APIs
import { UserProvider } from './context/userContext'
import { MenuProvider } from './context/menuContext'
import { ThemeProvider } from './context/themeContext'
import { ProductProvider } from './context/productContext'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <ThemeProvider>
          <MenuProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </MenuProvider>
        </ThemeProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
