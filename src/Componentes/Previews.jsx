import Games from "./Games"

const Previews = ({ games }) => {

  console.log(games)

  return (
    <div className="mx-auto md:w-2/6 bg-slate-500 shadow-lg shadow-black rounded-md ml-10 py-5">
      <h3 className="text-white text-4xl text-center mx-auto font-black">{games.length === 0 ? ' ' : 'Juegos Previos'}</h3>
      <>{games.slice(-5).map((game,id) => (< Games game={game} key={id} />))}</>
    </div>
  )
}

export default Previews