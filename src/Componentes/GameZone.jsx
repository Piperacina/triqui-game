import { useState, useEffect } from 'react'

const GameZone = () => {

  const [playing, setPlaying] = useState(true)
  const [finished, setFinished] = useState(false)
  const [winner, setWinner] = useState(null)
  //const [informer, setInformer] = useState('')
  const [zonas, setZonas] = useState(['', '', '', '', '', '', '', '', ''])

  const player = async (x) => {
    console.log('zonas antes de iniciar', zonas)
    testing()
    if (finished) {

    } else {
      const valores = zonas.map((zona, id) => id === x ? (zona != '' ? zona = zona : (playing ? zona = 'X' : zona = 'O')) : zona = zona)
      console.log('valores despues de mapiar zonas',x,valores)
      if (valores != zonas){
        await setZonas(valores)
        setPlaying(!playing)
        console.log('valores dentro del if ',valores)
        setTimeout(() => console.log('zonas despues de setiado',zonas), 10000);
      }
      
      
    }
  }

  const testing = () => {
    if (zonas[0] == zonas[1] && zonas[1] == zonas[2] && zonas[2] == 'X') {
      setWinner(true)
      setFinished(true)
      console.log('gana jugador uno1')
    } else if (zonas[0] == zonas[1] && zonas[1] == zonas[2] && zonas[2] == 'O') {
      setWinner(false)
      setFinished(true)
      console.log('gana jugador dos1')
    } else if (zonas[3] == zonas[4] && zonas[4] == zonas[5] && zonas[5] == 'X') {
      setWinner(true)
      setFinished(true)
      console.log('gana jugador uno2')
    } else if (zonas[3] == zonas[4] && zonas[4] == zonas[5] && zonas[5] == 'O') {
      setWinner(false)
      setFinished(true)
      console.log('gana jugador dos2')
    } else if (zonas[6] == zonas[7] && zonas[7] == zonas[8] && zonas[8] == 'X') {
      setWinner(true)
      setFinished(true)
      console.log('gana jugador uno3')
    } else if (zonas[6] == zonas[7] && zonas[7] == zonas[8] && zonas[8] == 'O') {
      setWinner(false)
      setFinished(true)
      console.log('gana jugador dos3')
    } else if (zonas[0] == zonas[3] && zonas[3] == zonas[6] && zonas[6] == 'X') {
      setWinner(true)
      setFinished(true)
      console.log('gana jugador uno4')
    } else if (zonas[0] == zonas[3] && zonas[3] == zonas[6] && zonas[6] == 'O') {
      setWinner(false)
      setFinished(true)
      console.log('gana jugador dos4')
    } else if (zonas[1] == zonas[4] && zonas[4] == zonas[7] && zonas[7] == 'X') {
      setWinner(true)
      setFinished(true)
      console.log('gana jugador uno5')
    } else if (zonas[1] == zonas[4] && zonas[4] == zonas[7] && zonas[7] == 'X') {
      setWinner(false)
      setFinished(true)
      console.log('gana jugador dos5')
    } else if (zonas[2] == zonas[5] && zonas[5] == zonas[8] && zonas[8] == 'X') {
      setWinner(true)
      setFinished(true)
      console.log('gana jugador uno6')
    } else if (zonas[2] == zonas[5] && zonas[5] == zonas[8] && zonas[8] == 'O') {
      setWinner(false)
      setFinished(true)
      console.log('gana jugador dos6')
    } else if (zonas[0] == zonas[4] && zonas[4] == zonas[8] && zonas[8] == 'X') {
      setWinner(true)
      setFinished(true)
      console.log('gana jugador uno7')
    } else if (zonas[0] == zonas[4] && zonas[4] == zonas[8] && zonas[8] == 'O') {
      setWinner(false)
      setFinished(true)
      console.log('gana jugador dos7')
    } else if (zonas[2] == zonas[4] && zonas[4] == zonas[6] && zonas[6] == 'X') {
      setWinner(true)
      setFinished(true)
      console.log('gana jugador uno8')
    } else if (zonas[2] == zonas[4] && zonas[4] == zonas[6] && zonas[6] == 'O') {
      setWinner(false)
      setFinished(true)
      console.log('gana jugador dos8')
    }
    
  }



  return (
    <div className="text-center mt-10 mx-auto w-3/6 bg-slate-300 py-5">
      <h1 className="font-black text-red-500 mt-5 mb-5">
        {!finished? (playing ? 'Es turno del jugador X' : 'Es turno del jugador O'):(winner ? 'Gana el jugador X' : 'Gana el jugador O')}
      </h1>
      <table className="mx-auto mt-15 bg-white border-black w-3/4 h-1/2 text-5xl">
        <tbody>
          <tr className="border-0 border-b-4 border-b-gray-800 h-1/3">
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona11"
              onClick={(e) => {
                player(0)
              }}>
              {zonas[0]}
            </td>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona12"
              onClick={(e) => {
                player(1)
              }}>
              {zonas[1]}
            </td>
            <td
              className="border-0 border-l-4 border-l-gray-800 w-1/3 hover:bg-gray-400"
              id="zona13"
              onClick={(e) => {
                player(2)
              }}>
              {zonas[2]}
            </td>
          </tr>
          <tr className="border-0 border-b-4 border-b-gray-800 h-1/3">
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona21"
              onClick={(e) => {
                player(3)
              }}>
              {zonas[3]}
            </td>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona22"
              onClick={(e) => {
                player(4)
              }}>
              {zonas[4]}
            </td>
            <td
              className="border-0 border-l-4 border-l-gray-800 w-1/3 hover:bg-gray-400"
              id="zona23"
              onClick={(e) => {
                player(5)
              }}>
              {zonas[5]}
            </td>
          </tr>
          <tr>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona31"
              onClick={(e) => {
                player(6)
              }}>
              {zonas[6]}
            </td>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona32"
              onClick={(e) => {
                player(7)
              }}>
              {zonas[7]}
            </td>
            <td
              className="border-0 border-l-4 border-l-gray-800 w-1/3 hover:bg-gray-400"
              id="zona33"
              onClick={(e) => {
                player(8)
              }}>
              {zonas[8]}
            </td>
          </tr>
        </tbody>
      </table>
      <input
        className="block border-2 w-4/6 mx-auto mt-10 mb-10 p-3 rounded-lg shadow-black shadow-md text-gray-400 uppercase font-bold hover:bg-gray-700 cursor-pointer"
        value="reiniciar"
        type="submit"
        onClick={() => {
          setFinished(false)
          setZonas(['', '', '', '', '', '', '', '', ''])}}
      />
    </div>
  )
}

export default GameZone