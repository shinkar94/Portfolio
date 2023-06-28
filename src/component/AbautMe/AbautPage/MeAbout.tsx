import React from 'react';
import styled from "styled-components";
import {AboutPage} from "./Me";
import {ScrollLine} from "../../ScrollLine/ScrollLine";
import i2 from '../../../img/i2.jpg'

export const MeAbout = () => {
    return (
        <StMeAbout>
            <div className="meFace">
                {/*<img src={i2} alt="foto"/>*/}
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
                </div>
            </div>
            <ScrollLine />
            <div className="steck">
                {
                    AboutPage.me.skills.map((el,index) => {
                        return(
                            <div className="block_steck" key={index}>
                                <div className="steck_title">{el.nameSkill}</div>
                                <div className="steck_progres">
                                    <div className="progres_line" style={{width: `${el.percent}%`}}><span>{el.percent}%</span></div>
                                </div>
                            </div>
                        )
                    })
                }
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
  }

  .meFace img {
    width: 11vw;
    height: 14vw;
    background: black;
  }

  .steck {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .block_steck {
    /* background: green; */
    width: 30vw;

    .steck_progres {
      width: 100%;
      height: 20px;
      background: rgb(0, 0, 0);
      box-shadow: inset 0 0 2px white;
      border-radius: 4px;
    }

    .steck_title {
      padding-left: 8px;
    }

    .progres_line {
      display: flex;
      justify-content: left;
      align-items: center;
      /* width: 50%; */
      height: 20px;
      background: #D2C2AA;
      box-shadow: inset 0 0 5px black;
      color: black;
      border-radius: 4px;

      & span {
        margin-left: 10px;
      }
    }
  }
`
