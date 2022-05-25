const Puntuacion = () => {
    let NumJuegos=0
    let Jugador1=0
    let Jugador2=0

  return (
    <div className="w-2/6 text-center bg-slate-500 mx-auto text-lg shadow-lg shadow-black rounded-md mr-10 py-5">
        <h2 className="text-white text-2xl w-3/4 mx-auto">Puntuacion</h2>
        <br/>
        <p className="text-white text-2xl w-5/6 mx-auto mt-10">Puntos del jugaor 1 (X) = {Jugador1}</p>
        <p className="text-white text-2xl w-5/6 mx-auto mt-10">Puntos del jugaor 2 (O) = {Jugador2}</p>
        <input 
            className="block border-2 w-4/6 mx-auto mt-10 mb-10 p-3 rounded-lg shadow-black shadow-md text-gray-400 uppercase font-bold hover:bg-gray-700 cursor-pointer"
            value="reiniciar"
            type="submit"
        />
    </div>
  )
}

export default Puntuacion