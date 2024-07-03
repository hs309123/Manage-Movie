import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../../Redux/slices/moviesSlice';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDeleteMovie = (e) => {
        e.stopPropagation()
        dispatch(deleteMovie({ id: movie.id }))
    }

    return (
        <div onClick={() => { navigate(`/updatemovie/${movie.index}`) }} className="max-w-xs rounded-lg overflow-hidden shadow-md h-fit cursor-pointer hover:scale-105 transition-all ease-linear duration-150 relative">
            <button onClick={handleDeleteMovie} className="absolute top-4 right-4 hover:scale-125 bg-white rounded-full p-2 transition-all ease-linear duration-150"><MdDelete /></button>
            <div className="w-[280px] h-[200px] bg-gray-400 flex justify-center items-center overflow-clip">
                {movie.img ?
                    <img className="w-full object-contain" src={movie.img} alt={movie?.title} /> :
                    <p className="text-[80px] font-semibold">{movie.title.charAt(0)}</p>
                }
            </div>
            <div className="px-6 py-4 bg-antiquewhite">
                <p className="font-semibold text-xl mb-2 text-gray-800">{movie?.title}</p>
                <p className="text-gray-800 opacity-60">Released in: {movie?.releaseYear}</p>
                <p className="mb-1 text-gray-800 opacity-60">Genre: {movie?.genre}</p>
                <p className="text-gray-700">{movie?.description}</p>
                <p className="text-gray-700">Rating: {movie?.rating}/10</p>
                {
                    movie?.reviews?.length &&
                    <div>
                        <p className="text-gray-700 font-semibold">Reviews</p>
                        {movie?.reviews?.map((rev) => (
                            <p key={rev.id}>{rev.name}: {rev.review}</p>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default MovieCard
