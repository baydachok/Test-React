import {createSlice} from "@reduxjs/toolkit";

export const termsOfUseSlice = createSlice({
    name: 'termsOfUse',
    initialState: {
        agreed: false
    },
    reducers: {
        agree: state => {
            state.agreed = true
        },
        disagree: state => {
            state.agreed = false
        }
    }
})

export const { agree, disagree } = termsOfUseSlice.actions

export default termsOfUseSlice.reducer
