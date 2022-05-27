import React from 'react'

const Games = ({game}) => {
    return (
        <>
            <table className="bg-white text-lg mx-auto my-3 px-5 w-3/6 text-center border-blue-900 border-2 shadow-md shadow-blue-900 text-red-500">
                <tbody>
                    <tr className="border-b-2  border-gray-900 h-3/3">
                        <td className="border-r-2  border-gray-900 w-1/3 h-1/3">{game[0]===''?('-'):(game[0])}</td>
                        <td className="border-r-2  border-gray-900 w-1/3 h-1/3">{game[1]===''?('-'):(game[1])}</td>
                        <td className='w-1/3 h-1/3'>{game[2]===''?('-'):(game[2])}</td>
                    </tr>
                    <tr className="border-b-2  border-gray-900 h-3/3">
                        <td className="border-r-2  border-gray-900 w-1/3 h-1/3">{game[3]===''?('-'):(game[3])}</td>
                        <td className="border-r-2  border-gray-900 w-1/3 h-1/3">{game[4]===''?('-'):(game[4])}</td>
                        <td className='w-1/3 h-1/3'>{game[5]===''?('-'):(game[5])}</td>
                    </tr>
                    <tr className='h-3/3'>
                        <td className="border-r-2  border-gray-900 w-1/3 h-1/3">{game[6]===''?('-'):(game[6])}</td>
                        <td className="border-r-2  border-gray-900 w-1/3 h-1/3">{game[7]===''?('-'):(game[7])}</td>
                        <td className='w-1/3 h-1/3'>{game[8]===''?('-'):(game[8])}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Games