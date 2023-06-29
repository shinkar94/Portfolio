import React, {memo, useState} from 'react';
import styled from "styled-components";
import {AboutHead} from "./AbautPage/AboutHead";
import {MeAbout} from "./AbautPage/MeAbout";
import {Route, Routes} from "react-router-dom";
import {TextPage} from "./AbautPage/TextPage";
import {AboutPage} from "./AbautPage/Me";

export const Abaut = memo(() => {
    return (
        <StAboutContent>
            <StAboutWrapper>
                <AboutHead/>
                <div className="abaut_text">
                    <Routes>
                        <Route path={'/Portfolio'} element={<MeAbout/>}/>
                        <Route path={'/Profile'} element={<MeAbout/>}/>
                        <Route path={'/education'}
                               element={<TextPage text={AboutPage.BSATU} text2={AboutPage.INCUBATOR}/>}/>
                        <Route path={'/work'}
                               element={<TextPage text={AboutPage.ARMY} text2={AboutPage.BORISOVENRGO}/>}/>
                    </Routes>
                </div>
            </StAboutWrapper>
        </StAboutContent>
    );
});

const StAboutWrapper = styled.div`
  display: flex;
  ${({theme}) => theme.breakpoints.tablet}{
    flex-direction: column;
  }
`
const StAboutContent = styled.div`
  width: 50vw;
  height: 50vh;
  ${({theme}) => theme.breakpoints.tablet}{
    width: 80vw;
    height: 80vh;
  }
  overflow: auto;
  background: rgba(0, 0, 0, 0.39);
`
