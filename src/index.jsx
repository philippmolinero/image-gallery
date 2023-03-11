import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './Context/Context'
import App from './App'
import './styling/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
