import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import AddMovie from "./Pages/AddMovie/AddMovie"
import { Toaster } from 'react-hot-toast'
import UpdateMovie from './Pages/UpdateMovie/UpdateMovie'

const App = () => {
  return (
    <>

      <Routes>
        <Route element={<><Navbar /><Outlet /><Toaster /></>}>
          <Route path="/" element={<Home />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/updatemovie/:movieId" element={<UpdateMovie />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
