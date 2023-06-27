import React, {useState} from 'react';
import styled from "styled-components";
import {AboutHead} from "./AbautPage/AboutHead";
import {MeAbout} from "./AbautPage/MeAbout";
import {Route, Routes} from "react-router-dom";
import {TextPage} from "./AbautPage/TextPage";
import {AboutPage} from "./AbautPage/Me";

export const Abaut = () => {
    return (
        <div className="abaut-content">
            <StAboutWrapper>
                <AboutHead />
                <div className="abaut_text">
                    <Routes>
                        <Route path={'/Profile'} element={<MeAbout/>}/>
                        <Route path={'/education'} element={<TextPage text={AboutPage.BSATU} text2={AboutPage.INCUBATOR}/>}/>
                        <Route path={'/work'} element={<TextPage text={AboutPage.ARMY} text2={AboutPage.BORISOVENRGO}/>}/>
                    </Routes>
                </div>
            </StAboutWrapper>
        </div>
    );
};

const StAboutWrapper = styled.div`
  display: flex;
`