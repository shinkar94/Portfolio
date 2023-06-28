import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import styled from "styled-components";
import {Section} from "./component/Section/Section";
import {GlobalStyle} from "./Common/GlobalStyle";
import {useAppSelector} from "./app/hooks";

function App() {
    const appState = useAppSelector(state => state.app)
    return (
        <StApp>
            <GlobalStyle appState={appState}/>
            <Header/>
            <Section/>
        </StApp>
    );
}

export default App;

const StApp = styled.div`
    
`
