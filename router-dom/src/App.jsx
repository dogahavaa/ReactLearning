import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import EmployeeAbout from './pages/EmployeeAbout';
import CompanyAbout from './pages/CompanyAbout';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';


function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />}>
          <Route path='employee' element={<EmployeeAbout />} />
          <Route path='company' element={<CompanyAbout />} />
        </Route>

        <Route path='/products' element={<Products />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>

    </div>
  )
}

export default App
