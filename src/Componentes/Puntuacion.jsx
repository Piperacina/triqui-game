const Puntuacion = ({winsP1, winsP2, ties}) => {
    
  return (
    <div className="md:w-2/6 text-center mx-auto text-lg mr-10 py-5">
    <div className="rounded-xl my-5 py-3 bg-slate-500 shadow-xl shadow-gray-600">
        <h2 className="text-white text-2xl font-black w-3/4 mx-auto mb-2">Puntuacion</h2>
        <p className="text-white text-xl w-5/6 mx-auto">Puntos del jugaor 1 (X) = {winsP1}</p>
        <p className="text-white text-xl w-5/6 mx-auto">Puntos del jugaor 2 (O) = {winsP2}</p>
        <p className="text-white text-xl w-5/6 mx-auto">Empates = {ties}</p>
    </div>
    <div className="rounded-xl my-5 py-3 bg-slate-500 shadow-xl shadow-gray-600">
        <h3 className="text-white text-2xl text-center mx-auto font-black">Instruciones</h3>
        <p className="text-white text-justify mx-5 mt-2 font-thin">
          Cada jugador debera seleccionar una casilla, por turnos.
          iniciara el jugador con el simbolo X y este seleccionara uno
          de los 9 cuadros disponibles en el tablero, una vez
          seleccionado pasara a ser turno del jugador dos el cual
          tendra la figura O el cual debera seleccionar uno de los
          8 espacios restantes y asi iran turnando los jugadores.
        </p>
        <p className="text-white text-justify mx-5 mt-5 font-thin">
          el ganador sera el primero que logre crear una linea de
          tres figuras iguales o quedara en empate si todas las casillas
          son llenadas y ninguno logra las tres figuras consecutivas.
        </p>
    </div>
    </div>

  )
}

export default Puntuacion