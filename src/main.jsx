import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserContextProvider from './context/UserContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </UserContextProvider>
  </BrowserRouter>,
)
