import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {infosType} from "./Me";
type TextPage ={
    text: infosType
    text2: infosType
}
export const TextPage:FC<TextPage> = (props) => {
    const {text, text2} = props
    const [printedText, setPrintedText] = useState("");

    useEffect(() => {
        setPrintedText("")
        setPrintedText(text.text.charAt(0))
        let i = 0;
        const interval = setInterval(() => {
            if (text.text[i] !== undefined) {
                setPrintedText((prevText) => prevText + text.text[i]);
            }
            i++;
            if (i === text.text.length){
                clearInterval(interval);
                if (printedText.endsWith("undefined")) {
                    setPrintedText((prevText) => prevText.slice(0, -10)); // удаляем последние 10 символов
                }
            }
        }, 10);

        return () => clearInterval(interval);
    }, [text]);
    return (
        <StContainer>
            <h3>{text.title}</h3>
            <p>{printedText}</p>
            <h3>{text2.title}</h3>
            <p>{text2.text}</p>
        </StContainer>
    );
};

const StContainer = styled.div`
  padding: 2%;
  background: rgba(0, 0, 0, 0.8);
  height: 50vh;
  width: 35vw;
  overflow: auto;
`