import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="py-2 flex justify-between items-center px-12">
            <div className="flex justify-center items-center gap-4">
                <div className="bg-red-600 text-2xl text-white font-semibold py-2 px-4 rounded-xl">M</div>
                <h1 className="text-xl font-semibold text-red-600">Manage Movies</h1>
            </div>
            <div>
                <ul className="list-none flex items-center gap-4">
                    <li>
                        <NavLink to="/" className={({ isActive }) => (`${isActive ? "text-red-600 border-b" : "text-gray-400"} hover:border-b border-red-600 font-semibold text-lg`)}>Watchlist</NavLink>
                    </li>

                    <li>

                        <NavLink to="/addmovie" className={({ isActive }) => (`text-red-600 font-semibold border border-red-600 rounded-xl px-4 py-2 hover:bg-red-600 hover:text-white ${isActive && "text-white bg-red-600"} transition-all ease-linear duration-150`)}>Add a Movie</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
