import { useState, useEffect } from 'react'

const GameZone = () => {

  const [playing, setPlaying] = useState(true)

  const [row1, setRow1] = useState(false)
  const [row2, setRow2] = useState(false)
  const [row3, setRow3] = useState(false)

  const [col1, setCol1] = useState(false)
  const [col2, setCol2] = useState(false)
  const [col3, setCol3] = useState(false)

  const [zonas, setZonas] = useState(['','','','','','','','',''])

  const testing = () => {
    if(zonas[0] !== '' && zonas[1] !== '' && zonas[2] !== '' && !row1){
      setRow1(true)
      if(zonas[1] == 'X'){
        console.log('gana jugador uno1')
      }else{
        console.log('gana jugador dos1')
      }
    }else if(zonas[3] !== '' && zonas[4] !== '' && zonas[5] !== '' && !row2){
      setRow2(true)
      if(zonas[3] == 'X'){
        console.log('gana jugador uno2')
      }else{
        console.log('gana jugador dos2')
      }
    }else if(zonas[6] !== '' && zonas[7] !== '' && zonas[8] !== '' && !row3){
      setRow3(true)
      if(zona31 == 'X'){
        console.log('gana jugador uno3')
      }else{
        console.log('gana jugador dos3')
      }
    }else if(zonas[0] !== '' && zonas[3] !== '' && zonas[6] !== '' && !col1){
      setCol1(true)
      if(zona11 == 'X'){
        console.log('gana jugador uno4')
      }else{
        console.log('gana jugador dos4')
      }
    }else if(zonas[1] !== '' && zonas[4] !== '' && zonas[7] !== '' && !col2){
      setCol2(true)
      if(zona12 == 'X'){
        console.log('gana jugador uno5')
      }else{
        console.log('gana jugador dos5')
      }
    }else if(zonas[2] !== '' && zonas[5] !== '' && zonas[8] !== '' && !col3){
      setCol3(true)
      if(zona13 == 'X'){
        console.log('gana jugador uno6')
      }else{
        console.log('gana jugador dos6')
      }
    }

  }

  const player = (x) => {
    if (x === ''){
      let jugador =''
      if(playing){
        setPlaying(false)
        return('X');
      }else{
        setPlaying(true)
        return('O');
      } 
    } else{
      return x
    }
  }

   return (
    <div className="text-center mt-10 mx-auto w-3/6 bg-slate-300 py-5">
        <h1 className="font-black text-red-500 mt-5 mb-5">Es turno del jugador { playing? 'X':'O'}</h1>
        <table className="mx-auto mt-15 bg-white border-black w-3/4 h-1/2 text-5xl">
          <tbody>
          <tr className="border-0 border-b-4 border-b-gray-800 h-1/3">
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona11"
              onClick={(e) => {
                setZonas(player(zonas[0]))
                testing()}}>
                {zonas[0]}
            </td>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona12"
              onClick={(e) => {
                setZonas(player(zonas[1]))
                testing()}}>
                {zonas[1]}
            </td>
            <td
              className="border-0 border-l-4 border-l-gray-800 w-1/3 hover:bg-gray-400"
              id="zona13"
              onClick={(e) => {
                setZonas(player(zonas[2]))
                testing()}}>
                {zonas[2]}
            </td>
          </tr>
          <tr className="border-0 border-b-4 border-b-gray-800 h-1/3">
            <td 
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona21"
              onClick={(e) => {
                setZonas(player(zonas[3]))
                testing()}}>
                {zonas[3]}
            </td>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona22"
              onClick={(e) => {
                setZonas(player(zonas[4]))
                testing()}}>
                {zonas[4]}
            </td>
            <td
              className="border-0 border-l-4 border-l-gray-800 w-1/3 hover:bg-gray-400"
              id="zona23"
              onClick={(e) => {
                setZonas(player(zonas[5]))
                testing()}}>
                {zonas[5]}
            </td>
          </tr>
          <tr>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona31"
              onClick={(e) => {
                setZonas(player(zonas[6]))
                testing()}}>
                {zonas[6]}
            </td>
            <td
              className="border-0 border-r-4 border-r-gray-800 w-1/3 hover:bg-gray-400"
              id="zona32"
              onClick={(e) => {
                setZonas(player(zonas[7]))
                testing()}}>
                {zonas[7]}
            </td>
            <td
              className="border-0 border-l-4 border-l-gray-800 w-1/3 hover:bg-gray-400"
              id="zona33"
              onClick={(e) => {
                setZonas(player(zonas[8]))
                testing()}}>
                {zonas[8]}
            </td>
          </tr>
          </tbody>
        </table>
    </div>
  )
}

export default GameZone