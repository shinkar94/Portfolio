import {createSlice} from "@reduxjs/toolkit";

const initialState = {

}

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers:{}
})


export const appReducer = slice.reducer
export const appAction = slice.actions