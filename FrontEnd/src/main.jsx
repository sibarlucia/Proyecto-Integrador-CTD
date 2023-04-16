import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import EstadosGlobalesProvider from './context/global.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <EstadosGlobalesProvider>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </EstadosGlobalesProvider>
  </BrowserRouter>
)
