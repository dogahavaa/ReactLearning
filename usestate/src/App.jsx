import { useState } from 'react'
import './App.css'

function App() {

  const [username, setUsername] = useState('Doğa');
  const [lastname, setLastname] = useState('Hava');
  const [names, setNames] = useState(["doğa", "cemil", "ayşe", "fatma", "merve"])

  const handleChange = () => {
    setUsername("Doga");
  };



  return (
    <div>
      <div>{username} {lastname}</div>
      <div><button onClick={handleChange}>İsmi değiştir</button></div>
      <br></br>
      {
        names.map((isim, index) => (
          <div key={index}>{isim}</div>
        ))
      }
    </div>
  )
}

export default App
