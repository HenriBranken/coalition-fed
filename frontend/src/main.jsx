import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HealthContextProvider } from "./context/HealthContextProvider";
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HealthContextProvider>
      <App />
    </HealthContextProvider>
  </StrictMode>,
)
