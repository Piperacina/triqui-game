
const Previews = ({ games }) => {



  return (
    <div className="mx-auto md:w-2/6 bg-slate-500 shadow-lg shadow-black rounded-md ml-10 py-5">
      <h3 className="text-white text-4xl text-center mx-auto font-black">{games.length === 0 ? ' ' : 'Juegos Previos'}</h3>
      <div>
        {
          games.map(game => (
            <table border="1">
              <tbody>
                <tr>
                  <td>{game[0]}</td>
                  <td>{game[1]}</td>
                  <td>{game[2]}</td>
                </tr>
                <tr>
                  <td>{game[3]}</td>
                  <td>{game[4]}</td>
                  <td>{game[5]}</td>
                </tr>
                <tr>
                  <td>{game[6]}</td>
                  <td>{game[7]}</td>
                  <td>{game[8]}</td>
                </tr>
              </tbody>
            </table>
          ))
        }
      </div>
    </div>
  )
}

export default Previews