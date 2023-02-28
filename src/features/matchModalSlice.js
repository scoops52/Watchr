import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const matchModalSlice = createSlice({
    name: 'matchModal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        }
    }
})

export const { openModal, closeModal } = matchModalSlice.actions
export default matchModalSlice.reducer