import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthGoogleProvider } from './context/auth'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthGoogleProvider>
    <App />
  </AuthGoogleProvider>
)
