import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

console.log('asdf')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : import.meta.env.VITE_PUBLIC_URL}>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
