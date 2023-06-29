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
                    stack.map((stack, index) => {
                        return(
                            <div className={'stackImage'} key={index}>
                                <img src={stack.link} alt="stackImg"/>
                                <span>{stack.nameStack}</span>
                            </div>
                        )
                    })
                }
            </div>
        </StExample>
    );
};
const StExample = styled.div`
  & h3{
    text-align: center;
    background: black;
    border-bottom: 2px solid burlywood;
  }
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
  .staсkExample{
    display: flex;
    flex-wrap: wrap;
    background: black;
    border-top: 2px outset burlywood;
    .stackImage{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & img{
        width: 40px;
      }
    }
    
  }
`
