import { useState, useEffect } from 'react'
import Header from './Componentes/Header'
import GameZone from './Componentes/GameZone'
import Instructions from './Componentes/Instructions'
import Puntuacion from './Componentes/Puntuacion'

function App() {
  const [winsPlayerOne, setWinsPlayerOne] = useState(0)
  const [winsPlayerTow, setWinsPlayerTow] = useState(0)

  

  return (
    <div className="container  mx-auto h-screen">
      <Header/>
      <div className='flex mt-10 h-screen'>
        <Puntuacion/>
        <GameZone/>
        <Instructions/>
      </div>
      
    </div>
  )
}

export default App
