import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import ContextShare from './Context/ContextShare.jsx'
import TokenAuthContextShare from './Context/TokenAuthContextShare.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <TokenAuthContextShare>
        <ContextShare>
          <BrowserRouter>
            <App />
            </BrowserRouter>
        </ContextShare>
      </TokenAuthContextShare>
    
  </React.StrictMode>,
)