import React, {memo} from 'react';
import styled from "styled-components";
import {LineExample} from "./Carusel/LineExample";

export const ExampleWork = memo(() => {
    return (
        <StExampleContainer>
            <h1>Work Example</h1>
            <LineExample />
        </StExampleContainer>
    );
});

const StExampleContainer = styled.div`
  width: 50vw;
  height: 50vh;
  ${({theme}) => theme.breakpoints.tablet}{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    height: 70vh;
  }
  overflow: auto;
  background: rgba(0, 0, 0, 0.39);
  & h1{
    text-align: center;
  }
`