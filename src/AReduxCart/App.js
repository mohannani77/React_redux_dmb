import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './container/Header'
import ProductDetail from './container/ProductDetail'
import ProductListing from './container/ProductListing'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductListing/>}></Route>
        <Route path='/product/:productId' element={<ProductDetail/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
