import React, {FC} from 'react';
import styled from "styled-components";
import {InitialExampleType} from "../../../../features/app/exampleSlice";

type PropsType = {
    example: InitialExampleType[]
}

export const BlockExample:FC<PropsType> = ({example}) => {
    const {name,img,stack} = example[0]
    return (
        <StExample>
            <h3>{name}</h3>
            <div className={'blockImg'}>
                <img src={img} className={'imgExample'} alt={name}/>
                <div className={'viewShadow'}><a href="#" target={'_blank'}>View</a></div>
            </div>
            <div className={'staсkExample'}>
                {
                    stack.map((stack, index) => <img src={stack} alt="stackImg" key={index}/>)
                }
            </div>
        </StExample>
    );
};
const StExample = styled.div`
  .blockImg {
    position: relative;
    display: flex;
    justify-content: center;

    .viewShadow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: 0.4s ease-in-out;
      & a {
        text-decoration: none;
        font-size: 32px;
        color: burlywood;
        background: rgba(0, 0, 0, 0.93);
        border-radius: 10px;
        padding: 3px;
        border: 2px outset burlywood;
      }
      &:hover{
        opacity: 1;
      }
      &:hover ~ .imgExample{
        opacity: 0;
      }
    }
    .imgExample {
      width: 95%;
      &:hover ~ .viewShadow{
        opacity: 1;
      }
    }
    
  }

`
