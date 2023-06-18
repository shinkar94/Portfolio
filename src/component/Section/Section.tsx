import React, {useEffect, useState} from 'react';
import {Abaut} from "../AbautMe/Abaut";
import styled from "styled-components";
import fon1 from '../../img/fon1.jpg'
import fon2 from '../../img/i3.webp'
import fon5 from '../../img/f4.png'
import fon6 from '../../img/layer-6.png'

export const Section = () => {
    useEffect(() => {
        const handleMouseMove = (e:MouseEvent) => {
            const moveX = (e.clientX - window.innerWidth / 2) * -0.005;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            document.documentElement.style.setProperty("--move-x", `${moveX}deg`);
            document.documentElement.style.setProperty("--move-y", `${moveY}deg`);
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <StSection>
            <div className="layers__container">
                <LayersItem className="layer-1" fon1={fon1}></LayersItem>
                <LayersItem className="layer-2" fon2={fon2}></LayersItem>
                <LayersItem className="layer-3">
                    <div className="hero-content">
                        <h1>Java Script DEVELOPER <span>REACT / REDUX</span></h1>
                        <div className="hero-content__p">I am familiar with Angular, Vue, React Native.</div>
                        <button className="button-start">Start Learning</button>
                    </div>
                </LayersItem>
                <LayersItem className="layer-5" fon5={fon5}></LayersItem>
                <LayersItem className="layer-6" fon6={fon6}></LayersItem>
                <LayersItem className="layer-7">
                    <Abaut />
                </LayersItem>
            </div>
        </StSection>
    );
};

const StSection = styled.section`
  perspective: 1000px;
  overflow: hidden;
  .layers__container {
    height: 100vh;
    min-height: 500px;
    transform-style: preserve-3d;
    transform: rotateX(var(--move-y)) rotateY(var(--move-x));
    will-change: transform;
    transition: transform var(--transition);
  }
`

type LayersItemType = {
    fon1?: string
    fon2?: string
    fon5?: string
    fon6?: string
}

const LayersItem = styled.div<LayersItemType>`
  position: absolute;
  inset: -5vw;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s ease-out;
  &.layer-1 {
    background-image: url(${({fon1}) => fon1});
    transform: translateZ(-55px) scale(1.06);
  }
  &.layer-2 {
    background-image: url(${({fon2}) => fon2});
    transform: translateZ(80px) scale(.7) translateY(90px) translateX(var(--transition_l2));
    background-size: contain;
    background-repeat: no-repeat;
  }
  &.layer-3 {
    transform: translateZ(180px) scale(.8) translateX(var(--transition_l3));
  }
  &.layer-4 {
    transform: translateZ(190px) scale(.9);
  }
  &.layer-5 {
    background-image: url(${({fon5}) => fon5});
    transform: translateZ(50px) scale(.9) rotate(90deg);
    background-size: contain;
    background-repeat: no-repeat;
    /* background-position: 100px 500px; */
  }
  &.layer-6 {
    background-image: url(${({fon6}) => fon6});
    transform: translateZ(380px);
  }
  &.layer-7{
    transform: translateZ(180px) translateY(var(--transition_l7));
  }
  .hero-content {
    font-size: calc(var(--index) * 2.2);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: calc(var(--index) * -.15);
    line-height: 1.35em;
    margin-top: calc(var(--index) * 5.5);
  }
  .hero-content span {
    display: block;
  }
  .hero-content__p {
    text-transform: none;
    font-family: merriweather-italic-3d,serif;
    letter-spacing: normal;
    font-size: calc(var(--index) * .73);
    line-height: 3;
  }

  .button-start {
    font-family: Arial,serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: calc(var(--index) * .71);
    letter-spacing: -.02vw;
    padding: calc(var(--index) * .7) calc(var(--index) * 1.25);
    background-color: transparent;
    color: #fff;
    border-radius: 10em;
    border: rgb(255 255 255 / .4) 3px solid;
    outline: none;
    cursor: pointer;
    margin-top: calc(var(--index) * 2.5);
  }
  .layer-4, .layer-5, .layer-6 {
    pointer-events: none;
  }
  /* Abaut */
  .abaut-content{
    width: 50vw;
    height: 50vh;
    overflow: auto;
    background: rgba(0, 0, 0, 0.39);
  }
`