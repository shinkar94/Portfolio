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
                    <Link to={'#'}><img src={phoneImg} alt="phoneImg"/></Link>
                    <Link to={'#'}><img src={linkedinImg} alt="phoneImg"/></Link>
                    <Link to={'#'}><img src={telegramImg} alt="phoneImg"/></Link>
                    <Link to={'#'}><img src={gmailImg} alt="phoneImg"/></Link>
                    <Link to={'#'}><img src={githubImg} alt="phoneImg"/></Link>
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
