import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const length = state.length || 1
            const newMovieObj = { ...action.payload, id: length * length * Math.random() }
            state.push(newMovieObj)
        },
        deleteMovie: (state, action) => {
            const id = action.payload.id
            return state.filter((mov) => mov.id !== id)
        },
        updateMovie: (state, action) => {
            const id = action.payload.id
            const index = state.findIndex((mov) => mov.id === id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        addReviewandRating: (state, action) => {
            const id = action.payload.id
            const index = state.findIndex((mov) => mov.id === id);
            if (index !== -1) {
                if (action.payload.newReview) {
                    const reviewLength = state[index]?.reviews.length || 1
                    const newRev = { ...action.payload.newReview, id: reviewLength * reviewLength * Math.random() }
                    state[index].reviews.push(newRev);
                }
                if (action.payload.rating) {
                    state[index].rating = action.payload.rating
                }
            }
        },
        deleteReview: (state, action) => {
            const id = action.payload.id
            const index = state.findIndex((mov) => mov.id === id);
            if (index !== -1) {
                const reviewId = action.payload.reviewId
                const reviewIndex = state[index].reviews.findIndex((rev) => rev.id === reviewId);
                if (reviewIndex !== -1) {
                    state[index].reviews.splice(reviewIndex, 1)
                }
            }
        }

    },
})

export const { addMovie, deleteMovie, updateMovie } = moviesSlice.actions

export default moviesSlice.reducer