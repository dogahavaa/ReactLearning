import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const vize = 15;
  const final = 70;


  return (
    <div>
      {
        (vize + final) / 2 >= 50 ? <p>Helal bro</p> : <p>kaldın kaybol</p>
      }
    </div>

  )
}

export default App
