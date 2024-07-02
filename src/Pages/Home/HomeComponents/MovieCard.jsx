import React from 'react'

const MovieCard = ({ movie }) => {

    //delete button 
    //update button
    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-md h-fit cursor-pointer hover:scale-105 transition-all ease-linear duration-150">
            <div className="w-[280px] h-[200px] bg-gray-400 flex justify-center items-center overflow-clip">
                {movie.img ?
                    <img className="w-full object-contain" src={movie.img} alt={movie?.title} /> :
                    <p className="text-[80px] font-semibold">{movie.title.charAt(0)}</p>
                }
            </div>
            <div className="px-6 py-4 bg-antiquewhite">
                <p className="font-bold text-xl mb-2 text-gray-800">{movie?.title}</p>
                <p className="text-gray-700">{movie?.description}</p>
            </div>
        </div>
    )
}

export default MovieCard
