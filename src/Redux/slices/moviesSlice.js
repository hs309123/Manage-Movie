import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const length = state.length
            const newMovieObj = { ...action.payload, id: length + 1 }
            state.push(newMovieObj)
        },
        deleteMovie: (state, action) => {
            const id = action.payload.id
            state.filter((mov) => mov.id !== id)
        },
        updateMovie: (state, action) => {
            const id = action.payload.id
            let index = null
            state.forEach((mov, i) => {
                if (mov.id === id) {
                    index = i
                }
            })
            if (index) {
                state[index] = action.payload
            }
        }
    },
})

export const { addMovie, deleteMovie, updateMovie } = moviesSlice.actions

export default moviesSlice.reducer