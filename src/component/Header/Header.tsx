import React from 'react';
import styled from "styled-components";

export const Header = () => {
    return (
        <StHeader>
            <ul>
                <li className="li_home">Home</li>
                <li>Profile</li>
                <li className="li_abaut">About Me</li>
                <li>Example</li>
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
      list-style-type: none;
      font-size: calc(var(--index) * 1.2);
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
`