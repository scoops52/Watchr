import { configureStore } from "@reduxjs/toolkit";
import moviesListReducer from './features/moviesListSlice'
import paramSliceReducer from "./features/paramSlice";

export const store = configureStore({
    reducer: {
        moviesList: moviesListReducer,
        params: paramSliceReducer,
    }
});