import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import GlobalStyle from './style.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
