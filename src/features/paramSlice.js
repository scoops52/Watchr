import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    nameOne: '',
    nameTwo: '',
    genreId: null,
    paramsSubmitted: false,
};



const paramSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        setNameOne: (state, action) => {
            state.nameOne = action.payload;
        },
        setNameTwo: (state, action) => {
            state.nameTwo = action.payload;
        },
        setGenre: (state, action) => {
            state.genreId = action.payload
        },
        submitParams: (state) => {
            state.paramsSubmitted = true
        },
    },
});

export const { setNameOne, setNameTwo, setGenre, submitParams } = paramSlice.actions;
export default paramSlice.reducer;
