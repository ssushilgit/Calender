import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FeaturesContextProvider from './context/FeaturesContext.jsx'
import FaqContextProvider from './context/FaqContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FeaturesContextProvider>
    <FaqContextProvider>
      <App />
    </FaqContextProvider>
  </FeaturesContextProvider>,
)
