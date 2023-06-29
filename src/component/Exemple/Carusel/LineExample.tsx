import React, {useState} from 'react';
import styled from "styled-components";
import {useAppSelector} from "../../../app/hooks";
import {BlockExample} from "./BlockExample/BlockExample";
import leftBtn from '../../../img/appIcon/left.svg'
import rightBtn from '../../../img/appIcon/right.svg'

export const LineExample = () => {
    const exampleState = useAppSelector(state => state.example)
    const [orderExample, setOrderExample] = useState(1)
    const backExample = () => {
        setOrderExample(orderExample - 1)
    }
    const nextExample = () => {
        setOrderExample(orderExample + 1)
    }
    const FilterExample = exampleState.filter(example => example.order === orderExample)
    return (
        <StLineContainer>
            <button onClick={backExample}
                    disabled={orderExample <= 1}
                    style={{background: orderExample <=1 ? 'rgba(0, 0, 0, 0)' : 'black'}}>
                <img src={leftBtn} alt="leftBtn"/>
            </button>
            <BlockExample example={FilterExample}/>
            <button onClick={nextExample}
                    disabled={orderExample >= exampleState.length}
                    style={{background: orderExample >= exampleState.length ? 'rgba(0, 0, 0, 0)' : 'black'}}>
                <img src={rightBtn} alt="rightBtn"/>
            </button>
        </StLineContainer>
    );
};

const StLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    cursor: pointer;
    background: black;
    & img {
      width: 30px;
      height: 40px;
    }
  }
`

