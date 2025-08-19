import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [vize, setVize] = useState(0);
  const [final, setFinal] = useState(0);
  const [ortalama, setOrtalama] = useState();
  const sonuc = 0;

  const OrtalamaBul = () => {

    console.log((vize + final) / 2)
  }


  return (
    <>
      <div>
        <input type="number" value={vize} onChange={(e) => setVize(Number(e.target.value))} />
      </div>
      <div>
        <input type="number" value={final} onChange={(e) => setFinal(Number(e.target.value))} />
      </div>
      <div>
        <button onClick={OrtalamaBul}>Ortalama Bul</button>
      </div>

    </>
  )
}

export default App
