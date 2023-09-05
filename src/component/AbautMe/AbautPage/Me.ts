import React from "react";

type AboutPageType = {
    me: Me
} & PageMe

type Me = {
    name: string;
    lastName: string;
    age: number;
    children: string
    family: string;
    direction: string;
    description: string;
    skills: skills[]
}
type PageMe = {
    BSATU: infosType
    KHSHP: infosType
    ARMY: infosType
    BORISOVENRGO: infosType
    INCUBATOR: infosType
}
type skills = {
    percent: number, nameSkill: string
}
export type infosType = {
    title: string,
    text: string
}

export const AboutPage:AboutPageType = {
    ['me']:{
        name: "Roman",
        lastName: "Shinkarenko",
        age: 28,
        children: "no",
        family: "женат",
        direction: "FRONTEND",
        description: "I am 28 years old. Born in the city of Chashniki, Vitebsk region. Graduated 11\n" +
            "secondary school classes. Marital status: Married. Have no children",
        skills: [
            {percent: 90, nameSkill: 'HTML'},
            {percent: 90, nameSkill: 'CSS'},
            {percent: 90, nameSkill: 'JS'},
            {percent: 70, nameSkill: 'PHP'},
            {percent: 70, nameSkill: 'SQL'},
            {percent: 95, nameSkill: 'REACT'},
            {percent: 95, nameSkill: 'REDUX'},
            {percent: 95, nameSkill: 'REDUX TOOLKIT'},
        ]
    },

    ['BSATU']: {title: "BSATU", text: "Received a diploma of a Mechanical Engineer with a specialization in the production support of agricultural production processes"},
    ['KHSHP']: {title: "", text: "Arrived for work in KHSHP in the city of Chashniki. For half a year he worked as a chief engineer of the economy."},
    ['ARMY']: {title: "Freelancer", text: "Had some freelancing experience in my spare time. Self-created 2 projects, which can be seen in the portfolio. Basically, I worked with adding new functionality to already finished projects. In my work, I used possible technologies: HTML, SASS, JS, REACT, REDUX, TS, PHP, SQL."},
    ['BORISOVENRGO']: {title: "MINSKENERGO", text: "Throughout 3 years of experience, I’ve contributed to individual and collaborative projects, successfully establishing and maintaining an internal company website. This website hosts approximately 50 applications, ranging from journals and references to inventory tracking, work planning, to-do lists, and internal communication tools. The majority of these apps generates Excel reports. The website features an intricate access control system, distributing permissions for application access (administrative roles)."},
    ['INCUBATOR']: {title: "IT-INCUBATOR", text: "For 7 months, I actively studied the full stack of Frontend development, with high-quality assimilation: React, Redux, RTK, RTK Query, Unit test, TS with constant knowledge control. I also gained experience in mentoring in conducting additional classes on react for junior cadets. I am currently doing an internship."}
}



