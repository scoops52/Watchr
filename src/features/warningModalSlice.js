import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    warningModalOpen: false
}

const warningModalSlice = createSlice({
    name: 'warningModal',
    initialState,
    reducers: {
        openWarningModal: (state) => {
            state.warningModalOpen = true
        },
        closeWarningModal: (state) => {
            state.warningModalOpen = false
        }
    }
})

export const { openWarningModal, closeWarningModal } = warningModalSlice.actions
export default warningModalSlice.reducer