import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const AboutHead = () => {
    return (
        <AboutHed>
            <div className="block_date">
                <NavLink to={'Profile'}>
                    <h3 className="block_yaer">Shinkarenko</h3>
                    <h4 className="block_title">Roman</h4>
                </NavLink>
            </div>
            <div className="block_date">
                <NavLink to={'Bsatu'}>
                    <h3 className="block_yaer">2012-2017</h3>
                    <h4 className="block_title">BSATU</h4>
                </NavLink>
            </div>
            <div className="block_date">
                <NavLink to={'Khsp'}>
                    <h3 className="block_yaer">2017</h3>
                    <h4 className="block_title">KHSHP</h4>
                </NavLink>
            </div>
            <div className="block_date">
                <NavLink to={'Army'}>
                    <h3 className="block_yaer">2017-2020</h3>
                    <h4 className="block_title">Army</h4>
                </NavLink>
            </div>
            <div className="block_date">
                <NavLink to={'Borisov'}>
                    <h3 className="block_yaer">2020-2023</h3>
                    <h4 className="block_title">BORISOVENRGO</h4>
                </NavLink>
            </div>
            <div className="block_date">
                <NavLink to={'Incubator'}>
                    <h3 className="block_yaer">01.01.2023 - 2023</h3>
                    <h4 className="block_title">IT-INCUBATOR</h4>
                </NavLink>
            </div>
        </AboutHed>
    );
};

const AboutHed = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow: auto;
  min-width: 15vw;
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
      font-size: calc(var(--index) * .7);
      margin: 2px;
    }
  }
`