import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceHolder from './pages/PlaceHolder'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/order' element={<PlaceHolder />} />
      </Routes>
    </div>
  )
}

export default App