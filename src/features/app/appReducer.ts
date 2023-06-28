import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type InitialAppType = {
    transition_l8: string
    transition_l7: string
    transition_l3: string
    transition_l2: string
}

const initialState:InitialAppType = {
    transition_l8: '-100vw',
    transition_l7: '100vh',
    transition_l3: '0vw',
    transition_l2: '0vw',
}

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers:{
        aboutPage: (state, action) => {
                state.transition_l8 = '-100vw'
                state.transition_l7 = '0vh'
                state.transition_l3 = '-100vw'
                state.transition_l2 = '45vw'
        },
        homePage: (state, action) => {
                state.transition_l8 = '-100vw'
                state.transition_l7 = '100vh'
                state.transition_l3 = '0vw'
                state.transition_l2 = '0vw'
        },
        examplesPage: (state, action)=>{
            state.transition_l8 = '0vw'
            state.transition_l7 = '100vh'
            state.transition_l3 = '-100vw'
            state.transition_l2 = '100vw'
        }
    }
})


export const appReducer = slice.reducer
export const appAction = slice.actions