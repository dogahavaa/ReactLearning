import { useState } from 'react'
import './App.css'
import Currency from './components/Currency'

function App() {

  return (
    <div className='main-container'>
      {
        <Currency />
      }
    </div>
  )
}

export default App
