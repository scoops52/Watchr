import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    backgroundImage: `url(${require('../assets/filmStripBg.jpg')})`,
};

const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        setBackgroundImage: (state, action) => {
            state.backgroundImage = `url(${require(`../assets/${action.payload}.jpg`)})`;
        },
    resetBackground: () => initialState
    },
});

export const { setBackgroundImage, resetBackground } = backgroundSlice.actions;

export default backgroundSlice.reducer; 