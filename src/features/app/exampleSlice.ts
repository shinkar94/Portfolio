import {createSlice} from "@reduxjs/toolkit";
//nameExamle
import FurutaImg from '../../img/exemple/furuta.jpg'
import ToDoList from '../../img/exemple/todo.jpg'
import MyMoney from '../../img/exemple/MyMoney.jpg'
import Cards from '../../img/exemple/cards.png'
import Tarot from '../../img/exemple/tarot.png'
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
import Next from '../../img/icon/next-gray.svg'
import Mongo from '../../img/icon/mongo.svg'
import Sass from '../../img/icon/sass.svg'
import MobX from '../../img/icon/mobx.svg'
export type InitialExampleType = {
    order: number
    name: string
    img: string
    link: string
    stack: StackType[]
}
type StackType = {
    link: string
    nameStack: string
}

const InitialState:InitialExampleType[] = [
    {order: 1, name: 'Furuta', img: FurutaImg,link: 'https://furuta.by/',
        stack: [
            {link: JSImg, nameStack: 'JS Native'},
            {link: HTMLImg,nameStack: 'HTML'},
            {link: CSSImg, nameStack: 'CSS'}
        ]
    },
    {order: 2, name: 'Spend Wise', img: MyMoney,link: 'https://spend-wise-seven.vercel.app/',
        stack: [
            {link: Next, nameStack: 'Next'},
            {link: RTKImg,nameStack: 'RTK'},
            {link: Mongo,nameStack: 'Mongo'},
            {link: ChartImg, nameStack: "ChartJs"},
            {link: formik, nameStack: 'Formik'},
            {link: StComponentImg, nameStack: 'Styled'}
        ]
    },
    {order: 3, name: 'ToDoList', img: ToDoList,link: '',
        stack: [
            {link: ReactImg,nameStack: 'React'},
            {link: RTKImg,nameStack: 'RTK'},
            {link: formik, nameStack: 'Formik'},
            {link: StComponentImg, nameStack: 'Styled'}
        ]
    },
    {order: 4, name: 'Cards', img: Cards,link: 'https://cards-eosin-ten.vercel.app/',
        stack: [
            {link: ReactImg, nameStack: 'React'},
            {link: RTKImg,nameStack: 'RTK'},
            {link: Router,nameStack: 'Router'},
            {link: ViteImg, nameStack: 'Vite'},
            {link: Sass, nameStack: 'SCSS'},
        ]
    },
    {order: 5, name: 'Tarot', img: Tarot,link: 'https://tarot-iota.vercel.app/',
        stack: [
            {link: ReactImg, nameStack: 'React'},
            {link: MobX,nameStack: 'MobX'},
            {link: ReactImg, nameStack: 'CRA'},
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