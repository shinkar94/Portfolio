import React from 'react';
import {Abaut} from "../AbautMe/Abaut";

export const Section = () => {
    return (
        <section className="layers">
            <div className="layers__container">
                <div className="layers__item layer-1"></div>
                <div className="layers__item layer-2"></div>
                <div className="layers__item layer-3">
                    <div className="hero-content">
                        <h1>Java Script DEVELOPER <span>REACT / REDUX</span></h1>
                        <div className="hero-content__p">I am familiar with Angular, Vue, React Native.</div>
                        <button className="button-start">Start Learning</button>
                    </div>
                </div>
                <div className="layers__item layer-5"></div>
                <div className="layers__item layer-6"></div>
                <div className="layers__item layer-7">
                    <Abaut />
                </div>
            </div>
        </section>
    );
};