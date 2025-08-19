import { useState } from 'react'
import './App.css'
import Header from './Header'
import { languages } from './Data'
import Language from './Language'
import './css/Course.css'

function App() {


  return (
    <>
      <Header />
      <div className='language-main'>
        {
          languages?.map((language) => (
            <Language key={language.id} language={language} />
          ))
        }
      </div>

    </>
  )
}

export default App
