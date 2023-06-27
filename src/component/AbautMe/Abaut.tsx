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
                        <Route path={'/Bsatu'} element={<TextPage text={AboutPage.BSATU}/>}/>
                        <Route path={'/Khsp'} element={<TextPage text={AboutPage.KHSHP}/>}/>
                        <Route path={'/Army'} element={<TextPage text={AboutPage.ARMY}/>}/>
                        <Route path={'/Borisov'} element={<TextPage text={AboutPage.BORISOVENRGO}/>}/>
                        <Route path={'/Incubator'} element={<TextPage text={AboutPage.INCUBATOR}/>}/>
                    </Routes>
                </div>
            </StAboutWrapper>
        </div>
    );
};

const StAboutWrapper = styled.div`
  display: flex;
`