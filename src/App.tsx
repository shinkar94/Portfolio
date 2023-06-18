import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import styled from "styled-components";
import {Section} from "./component/Section/Section";

function App() {
  return (
    <StApp>
      <div className="logo"></div>
      <Header />
      <Section />
    </StApp>
  );
}

export default App;

const StApp = styled.div`


`
