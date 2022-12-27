import { RoutingListener } from './Components/Routes/RoutingListener'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutingListener/>
    <App />
  </React.StrictMode>,
)
