import React, {useState} from 'react';
import styled from "styled-components";
import {useAppSelector} from "../../../app/hooks";
import {BlockExample} from "./BlockExample/BlockExample";

export const LineExample = () => {
    const exampleState = useAppSelector(state => state.example)
    const [orderExample, setOrderExample] = useState(1)
    const backExample = () =>{
        setOrderExample(orderExample - 1)
    }
    const nextExample = () =>{
        setOrderExample(orderExample + 1)
    }
    const FilterExample = exampleState.filter(example => example.order === orderExample)
    return (
        <StLineContainer>
            <button onClick={backExample} disabled={orderExample <= 1}>left</button>
            <BlockExample example={FilterExample}/>
            <button onClick={nextExample} disabled={orderExample >= exampleState.length}>right</button>
        </StLineContainer>
    );
};

const StLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

