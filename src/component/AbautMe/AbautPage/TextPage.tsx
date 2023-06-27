import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
type TextPage ={
    text: string
}
export const TextPage:FC<TextPage> = (props) => {
    const {text} = props
    const [printedText, setPrintedText] = useState("");

    useEffect(() => {
        setPrintedText("")
        setPrintedText(text.charAt(0))
        let i = 0;
        const interval = setInterval(() => {
            console.log(text[i])
            if (text[i] !== undefined) {
                setPrintedText((prevText) => prevText + text[i]);
            }
            i++;
            if (i === text.length){
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
            <p>{printedText}</p>
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