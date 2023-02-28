import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserTwoRendered: false,
    likedMovies: [],
    randomLikedMovie: {},
    userTwoLikedMovies: [],
    matchedMovies: [],
    
};

const userTwoSlice = createSlice({
    name: 'userTwo',
    initialState,
    reducers: {
        renderUserTwo: (state) => {
            state.isUserTwoRendered = true
        },
        getRandomLikedMovie: (state, action) => {
            const randomIndex = Math.floor(Math.random() * state.likedMovies.length);
            state.randomLikedMovie = state.likedMovies[randomIndex];
        },
        likeMovie: (state, action ) => {
            if (state.likedMovies.some((movie) => movie.id === action.payload.id)) {
                state.matchedMovies.push(action.payload);

            } else {
                state.likedMovies.push(action.payload);
            }
        },
        // matchMovie: (state, action) => {
        //     state.matchedMovies.push(action.payload);
            
        // },
        removeMovieFromLiked: (state, action) => {
            const movieId = action.payload;
            state.likedMovies = state.likedMovies.filter((movie) => movie.id !== movieId)
        },
        
        
    }
});

export const { renderUserTwo, getRandomLikedMovie, likeMovie, matchMovie, removeMovieFromLiked} = userTwoSlice.actions
export default userTwoSlice.reducer