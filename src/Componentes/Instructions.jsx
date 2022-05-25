const Instructions = () => {
  return (
    <div className="mx-auto w-2/6 bg-slate-500 shadow-lg shadow-black rounded-md ml-10 py-5">
        <h3 className="text-white text-4xl text-center mx-auto font-black">Instruciones</h3>
        <p className="text-white text-justify mx-5 mt-5 font-bold">
          Cada jugador debera seleccionar una casilla, por turnos.
          iniciara el jugador con el simbolo X y este seleccionara uno
          de los 9 cuadros disponibles en el tablero, una vez
          seleccionado pasara a ser turno del jugador dos el cual
          tendra la figura O el cual debera seleccionar uno de los
          8 espacios restantes y asi iran turnando los jugadores.
        </p>
        <p className="text-white text-justify mx-5 mt-5 font-bold">
          el ganador sera el primero que logre crear una linea de
          tres figuras iguales o quedara en empate si todas las casillas
          son llenadas y ninguno logra las tres figuras consecutivas.
        </p>
    </div>
  )
}

export default Instructions