import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import movies from '../movies'

const initialState = {
    movies: [],
    randomMovie: [],
    likedMovies: [],
    dislikedMovies: [],
    status: 'idle',
    error: null
};

export const getMovies = createAsyncThunk(
    'moviesList/getMovies', 
    async (_,{getState}) => {
        const genreId = getState().params.genreId
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=21b3c3bc0eca2c55bbf980fd3de5fb3e&with_genres=${genreId}&sort_by=popularity.desc&page=1&language=en-US`
        );
        return response.data.results
    }
);

const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {
        getRandomMovie: (state, action ) => {
            const randomIndex = Math.floor(Math.random() * state.movies.length);
            state.randomMovie = state.movies[randomIndex];
        },
        likeMovie: (state, action ) => {
            state.likedMovies.push(action.payload)
        },
        removeMovie: (state, action) => {
            const movieId = action.payload;
            state.movies = state.movies.filter((movie) => movie.id !== movieId)
        },
        dislikeMovie: (state, action ) => {
            state.dislikedMovies.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
    


});

export const { getRandomMovie, likeMovie, dislikeMovie, removeMovie } = moviesListSlice.actions;

export default moviesListSlice.reducer;