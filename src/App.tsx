import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import styled from "styled-components";
import {Section} from "./component/Section/Section";
import {GlobalStyle} from "./Common/GlobalStyle";
import {useAppSelector} from "./app/hooks";
import logo from './img/logo.png'

function App() {
    const appState = useAppSelector(state => state.app)
    console.log(appState)
    return (
        <StApp logo={logo}>
            <GlobalStyle appState={appState}/>
            <div className="logo"></div>
            <Header/>
            <Section/>
        </StApp>
    );
}

export default App;

const StApp = styled.div<{logo: string}>`
  .logo {
    background-image: url(${({logo}) => logo});
  }

`
