import React, {FC} from 'react';
import styled from "styled-components";
import {InitialExampleType} from "../../../../features/app/exampleSlice";
import searchImg from '../../../../img/appIcon/search.svg'

type PropsType = {
    example: InitialExampleType[]
}

export const BlockExample:FC<PropsType> = ({example}) => {
    const {name,img,stack, link} = example[0]
    return (
        <StExample>
            <h3>{name}</h3>
            <div className={'blockImg'}>
                <img src={img} className={'imgExample'} alt={name}/>
                <div className={'viewShadow'}><a href={link} target={'_blank'}><img src={searchImg} alt="search"/></a></div>
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
      ${({theme}) => theme.breakpoints.tablet}{
        opacity: 1;
      }
      transition: 0.4s ease-in-out;
      & a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: 32px;
        border-radius: 10px;
        padding: 3px;
        & img{
          width: 10vw;
        }
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
    gap: 5px;
    background: black;
    border-top: 2px outset burlywood;
    .stackImage{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & img{
        width: 2.5vw;
        ${({theme}) => theme.breakpoints.tablet}{
          width: 6vw;
        }
      }
    }
    
  }
`
