import React from 'react';
import styled from "styled-components";
import {AboutPage} from "./Me";

export const MeAbout = () => {
    return (
        <StMeAbout>
            <div className="meFace">
                <img src="" alt="foto"/>
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
            <div className="steck">
                {
                    AboutPage.me.skills.map(el => {
                        return(
                            <div className="block_steck">
                                <div className="steck_title">{el.nameSkill}</div>
                                <div className="steck_progres">
                                    <div className="progres_line" style={{width: `${el.percent}%`}}>{el.percent}%</div>
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
  .meFace{
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  .meFace img{
    width: 10vw;
    height: 10vw;
    background: black;
  }
  .block_steck{
    /* background: green; */
    width: 30vw;
    .steck_progres{
      width: 100%;
      height: 20px;
      background: rgb(0, 0, 0);
      box-shadow: inset 0 0 2px white;
    }
    .steck_title{
      padding-left: 8px;
    }
    .progres_line{
      display: flex;
      justify-content: left;
      align-items: center;
      /* width: 50%; */
      height: 20px;
      background: rgb(216, 216, 216);
      box-shadow: inset 0 0 5px black;
      color: black;
    }
  }
`
