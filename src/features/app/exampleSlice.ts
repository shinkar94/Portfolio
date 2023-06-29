import {createSlice} from "@reduxjs/toolkit";
//nameExamle
import FurutaImg from '../../img/exemple/furuta.jpg'
import ToDoList from '../../img/exemple/todo.jpg'
import MyMoney from '../../img/exemple/MyMoney.jpg'
//stack
import ReactImg from '../../img/icon/react.svg'
import RTKImg from '../../img/icon/reduxToolkit.svg'
import JSImg from '../../img/icon/javaScript.svg'
import HTMLImg from '../../img/icon/html.svg'
import CSSImg from '../../img/icon/css.svg'
import ViteImg from '../../img/icon/vite.svg'
import ChartImg from '../../img/icon/chartjs.svg'
import Router from '../../img/icon/react-router.svg'
import formik from "../../img/icon/formik2.svg"
import StComponentImg from '../../img/icon/stcomponent.svg'
export type InitialExampleType = {
    order: number
    name: string
    img: string
    stack: StackType[]
}
type StackType = {
    link: string
    nameStack: string
}

const InitialState:InitialExampleType[] = [
    {order: 1, name: 'Furuta', img: FurutaImg,
        stack: [
            {link: JSImg, nameStack: 'JS Native'},
            {link: HTMLImg,nameStack: 'HTML'},
            {link: CSSImg, nameStack: 'CSS'}
        ]
    },
    {order: 2, name: 'MyMoney', img: MyMoney,
        stack: [
            {link: ReactImg,nameStack: 'React'},
            {link: RTKImg,nameStack: 'RTK'},
            {link: ViteImg, nameStack: 'Vite'},
            {link: ChartImg, nameStack: "ChartJs"},
            {link: Router, nameStack: 'Router'},
            {link: formik, nameStack: 'Formik'},
            {link: StComponentImg, nameStack: 'Styled'}
        ]
    },
    {order: 3, name: 'ToDoList', img: ToDoList,
        stack: [
            {link: ReactImg,nameStack: 'React'},
            {link: RTKImg,nameStack: 'RTK'},
            {link: formik, nameStack: 'Formik'},
            {link: StComponentImg, nameStack: 'Styled'}
        ]
    }
]

export const slice = createSlice({
    name: 'example',
    initialState: InitialState,
    reducers: {

    }
})

export const exampleReducer = slice.reducer
export const exampleAction = slice.actions