import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './componerts/Topart.css'
 import Leam from './componerts/leam.jsx'
 import './index.css'
import Qrcode from './componerts/Qrcode.jsx'
import './componerts/Qrcode.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    { <App /> }
    { <Leam/> }
    <Qrcode/>
  </StrictMode>,
)
