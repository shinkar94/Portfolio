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
                        <span>Возрост: </span><span>28</span>
                    </div>
                    <div className="info_block">
                        <span>Семейное: </span><span>Женат</span>
                    </div>
                    <div className="info_block">
                        <span>Дети: </span><span>Пока нет</span>
                    </div>
                    <div className="info_block">
                        <span>Напровление: </span><span>FRONTEND</span>
                    </div>
                    <div className="info_block">
                        <span>City: </span><span>BORISOV</span>
                    </div>
                </div>
            </div>
            <ScrollLine />
            <div className="steck">
                <p className="block_steck">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores autem earum eum explicabo, ipsam nam nemo, nihil optio quam quod vel voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores autem earum eum explicabo, ipsam nam nemo, nihil optio quam quod vel voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores autem earum eum explicabo, ipsam nam nemo, nihil optio quam quod vel voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores autem earum eum explicabo, ipsam nam nemo, nihil optio quam quod vel voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores autem earum eum explicabo, ipsam nam nemo, nihil optio quam quod vel voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores autem earum eum explicabo, ipsam nam nemo, nihil optio quam quod vel voluptatibus.</p>
            </div>
        </StMeAbout>
    );
};

const StMeAbout = styled.div`
  height: 50vh;
  ${({theme}) => theme.breakpoints.tablet}{
    height: 70vh;
  }
  overflow: auto;
  .meFace {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    color: #ffffff;
    background: #9a8a67;
    padding: 10px;
    .contactSection{
      display: flex;
      flex-direction: column;
      gap: 5px;
      & img{
        width: 40px;
      }
    }
  }

  .steck {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .block_steck{
      background: #9a8a67;
    }
  }

`
