import { useState, useEffect } from 'react'

const GameZone = ({counter,setGames,games}) => {

  const [playing, setPlaying] = useState(true)
  const [finished, setFinished] = useState(false)
  const [winner, setWinner] = useState(null)
  const [zonas, setZonas] = useState(['', '', '', '', '', '', '', '', ''])

  const fill = (x) => {
    if (!finished && zonas[x] === '') {
      const valores = zonas.map((zona, id) => id === x ? (playing ? zona = 'X' : zona = 'O') : zona = zona)
      setZonas(valores)
      setPlaying(!playing)
    }
  }

  const testings = () => {
    if(!zonas.every(x=>x!=='')){
      testing(0, 1, 2)
      testing(3, 4, 5)
      testing(6, 7, 8)
      testing(0, 3, 6)
      testing(1, 4, 7)
      testing(2, 5, 8)
      testing(0, 4, 8)
      testing(2, 4, 6)
    }else{
      setFinished(true)
    }
  }

  const testing = (a, b, c) => {
    if (([zonas[a], zonas[b], zonas[c]].every(x => x === 'X')) || ([zonas[a], zonas[b], zonas[c]].every(x => x === 'O'))) {
      setWinner(zonas[a] === 'X')
      setFinished(true)
    }
  }

  const restarting = () => {
    finished? counter( winner !== null? ( winner ? 1 : 2):(0)):console.log('reinicio sin finalizar')
    !finished? (console.log('juegos iguales')) : setGames([...games,zonas])
    setFinished(false)
    setWinner(null)
    setZonas(['', '', '', '', '', '', '', '', ''])
  }

  useEffect(() => testings(), [zonas])

  return (
    <div className="text-center mx-auto md:w-3/6 bg-slate-300 py-5 rounded-3xl shadow-lg shadow-black">
      <h1 className="font-black text-red-500 mt-5 mb-5">
        {!finished ? (playing ? 'Es turno del jugador X' : 'Es turno del jugador O') : (winner !== null ? ( winner? 'Gana el jugador X' : 'Gana el jugador O') : 'Empate, Tablero lleno')}
      </h1>
      <table className="mx-auto mt-15 bg-white border-black w-3/4 h-1/2 text-5xl">
        <tbody>
          <tr className="border-0 border-b-4 border-b-gray-800 h-1/3">
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona11"
              onClick={(e) => {
                fill(0)
              }}>
              {zonas[0]}
            </td>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona12"
              onClick={(e) => {
                fill(1)
              }}>
              {zonas[1]}
            </td>
            <td
              className="border-0 border-l-4 border-l-gray-800 w-1/3 hover:bg-gray-400"
              id="zona13"
              onClick={(e) => {
                fill(2)
              }}>
              {zonas[2]}
            </td>
          </tr>
          <tr className="border-0 border-b-4 border-b-gray-800 h-1/3">
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona21"
              onClick={(e) => {
                fill(3)
              }}>
              {zonas[3]}
            </td>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona22"
              onClick={(e) => {
                fill(4)
              }}>
              {zonas[4]}
            </td>
            <td
              className="border-0 border-l-4 border-l-gray-800 w-1/3 hover:bg-gray-400"
              id="zona23"
              onClick={(e) => {
                fill(5)
              }}>
              {zonas[5]}
            </td>
          </tr>
          <tr>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona31"
              onClick={(e) => {
                fill(6)
              }}>
              {zonas[6]}
            </td>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona32"
              onClick={(e) => {
                fill(7)
              }}>
              {zonas[7]}
            </td>
            <td
              className="border-0 border-l-4 border-l-gray-800 w-1/3 hover:bg-gray-400"
              id="zona33"
              onClick={(e) => {
                fill(8)
              }}>
              {zonas[8]}
            </td>
          </tr>
        </tbody>
      </table>
      <input
        className="block border-2 w-4/6 mx-auto mt-10 mb-10 p-3 rounded-lg shadow-black shadow-md text-gray-400 uppercase font-bold hover:bg-gray-700 cursor-pointer"
        value={!finished ? 'Reiniciar' : 'Nuevo Juego'}
        type="submit"
        onClick={() => restarting()}/>
    </div>
  )
}

export default GameZone