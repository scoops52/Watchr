import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root'
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase('RESET_ALL', (state, action) => {
            Object.keys(state).forEach((key) => {
                state[key] = initialState[key];
            });
        });
    },
})

export default rootSlice.reducer