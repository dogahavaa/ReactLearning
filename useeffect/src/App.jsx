import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("sürekli çalışır")
  })

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır")
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstName state değeri değiştiğinde çalışır")
  }, [firstName])

  return (
    <div>
      Doğa
    </div>
  )
}

export default App
