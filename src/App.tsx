
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import HomePage from './components/HomePage'
function App() {


  return (
    <>
      <BrowserRouter>


        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/productDetail' element={<ProductDetail />} />


        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
