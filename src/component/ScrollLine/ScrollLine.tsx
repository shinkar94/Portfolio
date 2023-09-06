import React from 'react';
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import angular from "../../img/icon/angular.svg"
import apollo from "../../img/icon/apollo.svg"
import cssImg from "../../img/icon/css.svg"
import formik from "../../img/icon/formik.svg"
import graphQL from "../../img/icon/graphQl.svg"
import html from "../../img/icon/html.svg"
import javaScript from "../../img/icon/javaScript.svg"
import MU from "../../img/icon/materialU.svg"
import react from "../../img/icon/react.svg"
import reactQuery from "../../img/icon/reactQuery.svg"
import reduxSaga from "../../img/icon/reduxSaga.svg"
import reduxTol from "../../img/icon/reduxToolkit.svg"
import restApi from "../../img/icon/restAPI.svg"
import storyBook from "../../img/icon/storyBook.svg"
import TS from "../../img/icon/typeScript.svg"
import Unit from "../../img/icon/unitTest.svg"
import WebSocket from "../../img/icon/webSocket.svg"
import Chartjs from '../../img/icon/chartjs.svg'
import Router from '../../img/icon/react-router.svg'
import Vite from '../../img/icon/vite.svg'
import Next from '../../img/icon/nextjs.svg'
import Mongo from '../../img/icon/mongo.svg'
import MobX from '../../img/icon/mobx.svg'

export const ScrollLine = () => {
    return (
        <StWrapperMarguee>
            <Marquee>
                <div className={'lineImg'}>
                    <img src={MobX} className={'smallImg'} alt="MobX"/>
                    {/*<img src={apollo} alt="angular"/>*/}
                    <img src={cssImg} alt="angular"/>
                    <img src={formik} alt="angular"/>
                    {/*<img src={graphQL} alt="angular"/>*/}
                    <img src={html} alt="angular"/>
                    <img src={javaScript} alt="angular"/>
                    <img src={MU} alt="angular"/>
                    <img src={react} alt="angular"/>
                    <img src={reactQuery} alt="angular"/>
                    {/*<img src={reduxSaga} alt="angular"/>*/}
                    <img src={reduxTol} alt="angular"/>
                    <img src={restApi} alt="angular"/>
                    <img src={storyBook} alt="angular"/>
                    <img src={TS} alt="angular"/>
                    <img src={Unit} alt="angular"/>
                    <img src={WebSocket} alt="angular"/>
                    <img src={Chartjs} className={'smallImg'} alt="angular"/>
                    <img src={Router} className={'smallImg'} alt="angular"/>
                    <img src={Vite} className={'smallImg'} alt="angular"/>
                    <img src={Next} className={'smallImg'} alt="angular"/>
                    <img src={Mongo} className={'smallImg'} alt="angular"/>
                </div>
            </Marquee>
        </StWrapperMarguee>
    );
};

const StWrapperMarguee = styled.div`
  .lineImg{
    .smallImg{
      width: 60px;
    }
    & img{
      margin-right: 10px;
    }
  }
`