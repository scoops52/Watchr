import { configureStore } from "@reduxjs/toolkit";
import moviesListReducer from './features/moviesListSlice'
import paramSliceReducer from "./features/paramSlice";
import userTwoReducer from "./features/userTwoSlice";
import matchModalReducer from "./features/matchModalSlice";

export const store = configureStore({
    reducer: {
        moviesList: moviesListReducer,
        params: paramSliceReducer,
        userTwo: userTwoReducer,
        matchModal: matchModalReducer,
    }
});