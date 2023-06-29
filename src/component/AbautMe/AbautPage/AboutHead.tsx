import React, {memo} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const AboutHead = memo(() => {
    return (
        <AboutHed>
            <div className="block_date">
                <NavLink to={'Profile'}>
                    <h3 className="block_yaer">Shinkarenko</h3>
                    <h4 className="block_title">Roman</h4>
                </NavLink>
            </div>
            <div className="block_date">
                <NavLink to={'education'}>
                    <h3 className="block_yaer">Education</h3>
                </NavLink>
            </div>
            <div className="block_date">
                <NavLink to={'work'}>
                    <h3 className="block_yaer">Experience</h3>
                </NavLink>
            </div>
        </AboutHed>
    );
});

const AboutHed = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow: auto;
  min-width: 15vw;
  ${({theme}) => theme.breakpoints.tablet}{
    min-width: 23vw;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    height: 10vh;
  }
  .block_date {
    padding: 20px 0;
    transition: 0.5;
    cursor: pointer;
    & a{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: white;
      
    }

    &:hover {
      background: rgba(0, 0, 0, 0.87);
    }

    & h3, h4 {
      font-size: calc(var(--index) * 1.1);
      margin: 2px;
    }
  }
`