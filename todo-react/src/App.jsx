import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ola from './Ola.jsx'
import Lista from './Lista.jsx'

function App() {
  const nome = "Renato"

  return (
    <>
      <div>
        <Ola nome='Renato'></Ola>
        <Ola nome='Bonetti'></Ola>
      </div>
      <div>
        <Lista></Lista>
      </div>
    </>
  )
}

export default App
