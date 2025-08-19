import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  const productName = "Buzdolabı";

  return (
    <>
      {/* <Product productName={productName} price={3000} />
      <hr></hr>
      <Product productName="Pantolon" price={1500} /> */}


      <Container>
        <Product productName={productName} price={15000} />
      </Container>
    </>
  )
}

export default App
