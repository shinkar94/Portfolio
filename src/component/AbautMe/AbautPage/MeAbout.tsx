import React from 'react';
import styled from "styled-components";
import {ScrollLine} from "../../ScrollLine/ScrollLine";
import phoneImg from '../../../img/appIcon/phone.svg'
import telegramImg from '../../../img/appIcon/telegram.svg'
import gmailImg from '../../../img/appIcon/gmail.svg'
import linkedinImg from '../../../img/appIcon/linkedin.svg'
import githubImg from '../../../img/appIcon/github.svg'
import {Link} from "react-router-dom";



export const MeAbout = () => {
    return (
        <StMeAbout>
            <div className="meFace">
                <div className={'contactSection'}>
                    <Link to={'tel:+375298275332'}><img src={phoneImg} alt="phoneImg"/></Link>
                    <Link to={'https://www.linkedin.com/in/%D1%80%D0%BE%D0%BC%D0%B0%D0%BD-%D1%88%D0%B8%D0%BD%D0%BA%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE-bb402b254/'} target={'_blank'}><img src={linkedinImg} alt="phoneImg"/></Link>
                    <Link to={'https://t.me/RomanShinkarenko'} target={'_blank'}><img src={telegramImg} alt="phoneImg"/></Link>
                    <Link to={'mailto:romka94shinkarenko@gmail.com'}><img src={gmailImg} alt="phoneImg"/></Link>
                    <Link to={'https://github.com/shinkar94'} target={'_blank'}><img src={githubImg} alt="phoneImg"/></Link>
                </div>
                <div className="faceInfo">
                    <div className="info_block">
                        <span className={'descSpan'}>Age: </span><span>28</span>
                    </div>
                    <div className="info_block">
                        <span className={'descSpan'}>Family status: </span><span>Married</span>
                    </div>
                    <div className="info_block">
                        <span className={'descSpan'}>Children: </span><span>No</span>
                    </div>
                    <div className="info_block">
                        <span className={'descSpan'}>City: </span><span>BORISOV</span>
                    </div>
                    <div className="info_block">
                        <span className={'descSpan'}>Direction: </span><span>FRONTEND</span>
                    </div>
                    <div className="info_block">
                        <span className={'descSpan'}>Experience: </span><span>3 Years</span>
                    </div>
                    <div className="info_block">
                        <span className={'descSpan'}>Stack: </span><span> JS, TS, REACT, REDUX, MobX, RTK, RTK Query, NEXT, MongoDB, Oracle</span>
                    </div>
                    <div className="info_block">
                        <span className={'descSpan'}>Tools: </span><span> HTML, SASS, SQL, Story book, Formik, Unit test, Router dom, MU, Styled component</span>
                    </div>
                </div>
            </div>
            <ScrollLine />
            <div className="steck">
                <p className="block_steck">For the past 3 years, I’ve been engaged in fronted development, using HTML, SASS, JS, React, Redux, TS, PHP,Next and SQL to create SPA. Continuously striving for growth I’ve expanded my expertise to include REACT NATIVE. I’ve completed Fronted Developer training at IT-INCUBATOR, mastering REACT, REDUX, RTK, RTK Query, Story book, Formik, Unit test, Router dom, MU, Styled component. My eagerness for learning led me to independently explore MobX, MongoDB, Express during this period.</p>
                <p className="block_steck">I’m looking for an environment that can foster my growth as a developer and can give opportunity to refine my knowledge. I’m open to both individual and team-oriented job offers. Relocation is possible.</p>
            </div>
        </StMeAbout>
    );
};

const StMeAbout = styled.div`
  height: 50vh;

  ${({theme}) => theme.breakpoints.tablet} {
    height: 70vh;
  }

  overflow: auto;

  .meFace {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    color: #ffffff;
    background: #2d2d2d;
    padding: 10px;

    .contactSection {
      display: flex;
      flex-direction: column;
      gap: 5px;

      & img {
        width: 40px;
      }
    }
    .faceInfo{
      .info_block{
        .descSpan{
          color: burlywood;
        }
      }
    }
  }

  .steck {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .block_steck {
      padding: 4px;
      background: #2d2d2d;
    }
  }

`
