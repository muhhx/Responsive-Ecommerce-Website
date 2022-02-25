import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//Context APIs
import { MenuProvider } from './context/menuContext'

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
