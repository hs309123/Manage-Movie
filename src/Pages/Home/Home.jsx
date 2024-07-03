import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './HomeComponents/MovieCard'

const Home = () => {

    const allMovies = useSelector(state => state.movie)

    return (
        <div className="container px-4 py-8 h-[calc(100vh-90px)]">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">My Watchlist</h1>
            <div className="flex flex-wrap justify-start gap-16 h-full px-12">
                {allMovies.length ?
                    allMovies.map((movie, i) => <MovieCard key={movie.id} movie={{ ...movie, index: i }} />) :
                    <p className="m-auto text-xl font-semibold text-gray-600 -translate-y-[100px]">There are no movies in your watch list. Add Movies and Reviews about it.</p>
                }
            </div>
        </div>
    )
}

export default Home
