import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import styled from "styled-components";
import {Section} from "./component/Section/Section";
import {GlobalStyle} from "./Common/GlobalStyle";

function App() {
    const [moveX, setMoveX] = useState(0);
    const [moveY, setMoveY] = useState(0);
    useEffect(() => {
        function handleMouseMove(e:MouseEvent) {
            setMoveX((e.clientX - window.innerWidth / 2) * -0.005);
            setMoveY((e.clientY - window.innerHeight / 2) * 0.01);
        }

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <StApp moveX={moveX} moveY={moveY}>
            <GlobalStyle/>
            <div className="logo"></div>
            <Header/>
            <Section/>
        </StApp>
    );
}

export default App;

const StApp = styled.div<{moveX: number, moveY:number}>`
  --move-x: ${props => props.moveX}deg;
  --move-y: ${props => props.moveY}deg;
  .logo {

  }

`
