import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceHolder from './pages/PlaceHolder'
import "./App.css"
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceHolder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App