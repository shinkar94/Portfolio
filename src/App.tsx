import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import styled from "styled-components";
import {Section} from "./component/Section/Section";
import {GlobalStyle} from "./Common/GlobalStyle";

function App() {
    return (
        <StApp>
            <GlobalStyle/>
            <div className="logo"></div>
            <Header/>
            <Section/>
        </StApp>
    );
}

export default App;

const StApp = styled.div`
  .logo {

  }

`
