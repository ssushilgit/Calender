import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FeaturesContextProvider from './context/FeaturesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FeaturesContextProvider>
    <App />
  </FeaturesContextProvider>,
)
