import React from 'react'
import Navbar from './components/Navbar'
import MainBanner from './components/MainBanner'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { AppContext, useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCatagory from './pages/ProductCatagory'
import ProductDetails from './pages/ProductDetails'

function App() {

  const isSeller = useLocation().pathname.includes("seller")
  const {showUserLogin} = useAppContext()
  return (
    <div>
      {isSeller? null:<Navbar/>}
      {showUserLogin ? <Login/>:null}
      <Toaster/>
      <div className={`${isSeller?"":"px-6 md:px-16 lg:px-42 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/products/:category' element={<ProductCatagory/>}/>
          <Route path='/products/:category/:id' element={<ProductDetails/>}/>
        </Routes>
      </div>
      {!isSeller && <Footer/>}
    </div>
  )
}

export default App
