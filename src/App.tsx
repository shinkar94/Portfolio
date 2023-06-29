import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import styled, {ThemeProvider} from "styled-components";
import {Section} from "./component/Section/Section";
import {GlobalStyle} from "./Common/GlobalStyle";
import {useAppSelector} from "./app/hooks";

function App() {
    const appState = useAppSelector(state => state.app)
    const theme = useAppSelector(state => state.app.theme)
    return (
        <StApp>
            <ThemeProvider theme={theme}>
            <GlobalStyle appState={appState}/>
            <Header/>
            <Section/>
            </ThemeProvider>
        </StApp>
    );
}

export default App;

const StApp = styled.div`
    
`
