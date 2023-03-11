import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import './styling/style.css'
import { ContextProvider } from './Context/Context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ContextProvider> 
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>,
)
