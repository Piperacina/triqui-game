import { useState, useEffect } from 'react'
import Header from './Componentes/Header'
import GameZone from './Componentes/GameZone'
import Previews from './Componentes/Previews'
import Puntuacion from './Componentes/Puntuacion'

function App() {
  const [winsP1, setWinsP1] = useState(0)
  const [winsP2, setWinsP2] = useState(0)
  const [ties, setTies] = useState(0)
  const [games, setGames] = useState([])

  const counter = (a) => {
    switch (a){
      case 0:
        setTies(ties + 1)
        break;
      case 1:
        setWinsP1(winsP1 + 1)
        break;
      case 2:
        setWinsP2(winsP2 + 1)
        break;
    }
  }

  return (
    <div className="container  mx-auto h-screen">
      <Header/>
      <div className='md:flex mt-10'>
        <Puntuacion
          winsP1={winsP1}
          winsP2={winsP2}
          ties={ties}

        />
        <GameZone
          counter={counter}
          setGames={setGames}
          games={games}
        />
        <Previews
          games={games}
        />
      </div>
      
    </div>
  )
}

export default App
