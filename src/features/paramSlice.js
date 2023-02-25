import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    name: '',
    genreId: null,
    paramsSubmitted: false,
};



const paramSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setGenre: (state, action) => {
            state.genreId = action.payload
        },
        submitParams: (state) => {
            state.paramsSubmitted = true
        },
    },
});

export const { setName, setGenre, submitParams } = paramSlice.actions;
export default paramSlice.reducer;
