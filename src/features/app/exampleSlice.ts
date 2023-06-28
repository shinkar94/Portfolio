import {createSlice} from "@reduxjs/toolkit";
//nameExamle
import FurutaImg from '../../img/exemple/furuta.jpg'
import ToDoList from '../../img/exemple/todo.jpg'
//stack
import ReactImg from '../../img/icon/react.svg'
import RTKImg from '../../img/icon/reduxToolkit.svg'
import JSImg from '../../img/icon/javaScript.svg'
import HTMLImg from '../../img/icon/html.svg'
import CSSImg from '../../img/icon/css.svg'
export type InitialExampleType = {
    order: number
    name: string
    img: string
    stack: string[]
}

const InitialState:InitialExampleType[] = [
    {order: 1, name: 'Furuta', img: FurutaImg, stack: [JSImg,HTMLImg,CSSImg]},
    {order: 2, name: 'MyMoney', img: FurutaImg, stack: [ReactImg,RTKImg]},
    {order: 3, name: 'ToDoList', img: ToDoList, stack: [ReactImg,RTKImg]}
]

export const slice = createSlice({
    name: 'example',
    initialState: InitialState,
    reducers: {

    }
})

export const exampleReducer = slice.reducer
export const exampleAction = slice.actions