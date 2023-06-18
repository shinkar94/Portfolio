import React from 'react';
import styled from "styled-components";
import {useAppDispatch} from "../../app/hooks";
import {appAction} from "../../features/app/appReducer";


export const Header = () => {
    const dispatch = useAppDispatch()
    const onClickHandler = (namePage: string)=>{
        switch (namePage) {
            case 'about':{
                dispatch(appAction.aboutPage({}))
                break
            }
            case 'home':{
                dispatch(appAction.homePage({}))
                break
            }
            default: dispatch(appAction.homePage({}))
        }
    }
    return (
        <StHeader>
            <ul>
                <li onClick={()=> onClickHandler('home')}>Home</li>
                <li onClick={()=> onClickHandler('profile')}>Profile</li>
                <li onClick={()=> onClickHandler('about')}>About Me</li>
                <li onClick={()=> onClickHandler('example')}>Example</li>
            </ul>
        </StHeader>
    );
};


const StHeader = styled.header`
  position: absolute;
  z-index: 2;
  width: 100vw;
  & ul{
    display: flex;
    gap: 10px;
    padding: 10px;
    justify-content: right;
    background: rgba(0, 0, 0, 0.342);
    & li{
      font-weight: bold;
      list-style-type: none;
      font-size: calc(var(--index) * 1.2);
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
`