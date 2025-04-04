import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FirstProject from './firstProject.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <FirstProject /> */}
  </StrictMode>,
)
