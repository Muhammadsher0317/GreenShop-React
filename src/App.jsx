import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Shoping_cards from './pages/shoping_card/Shoping_cards'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/shoping_card" element={<Shoping_cards/>}/>
    </Routes>
    </BrowserRouter></> 
  )
}

export default App