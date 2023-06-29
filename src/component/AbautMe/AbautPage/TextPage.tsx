import React, {FC} from 'react';
import styled from "styled-components";
import {infosType} from "./Me";

type TextPage ={
    text: infosType
    text2: infosType
}
export const TextPage:FC<TextPage> = (props) => {
    const {text, text2} = props

    return (
        <StContainer>
            <h3>{text.title}</h3>
            <p>{text.text}</p>
            <h3>{text2.title}</h3>
            <p>{text2.text}</p>
        </StContainer>
    );
};

const StContainer = styled.div`
  padding: 2%;
  background: rgb(0, 0, 0);
  height: 50vh;
  width: 35vw;
  ${({theme}) => theme.breakpoints.tablet}{
    height: 70vh;
    width: 80vw;
  }
  overflow: auto;
`