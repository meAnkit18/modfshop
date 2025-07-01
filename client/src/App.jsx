import React from 'react'
import Navbar from './components/Navbar'
import MainBanner from './components/MainBanner'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

function App() {

  const isSeller = useLocation().pathname.includes("seller")
  return (
    <div>
      {isSeller? null:<Navbar/>}
      <Toaster/>
      <div className={`${isSeller?"":"px-6 md:px-16 lg:px-42 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
