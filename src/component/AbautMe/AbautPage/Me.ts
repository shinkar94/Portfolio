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
        ]
    },

    ['BSATU']: {title: "BSATU", text: "Received a diploma of a Mechanical Engineer with a specialization in the production support of agricultural production processes"},
    ['KHSHP']: {title: "", text: "Arrived for work in KHSHP in the city of Chashniki. For half a year he worked as a chief engineer of the economy."},
    ['ARMY']: {title: "ARMY", text: "Passing military service in the Armed Forces of the Republic of Belarus as a driver-mechanic MT-LB from 2017 to 2018. He also served two years under the contract as the commander of the department of the jamming station in electronic warfare. In his free time, he taught himself programming. HTML, CSS, JS, jQuery, PHP, Bootstrap."},
    ['BORISOVENRGO']: {title: "MINSKENERGO", text: "Software Engineer at Borisov Power Grids. Support for internal web project. Creation of new software on the website.\n"+
    "                    The main stack JS, PHP, SQL, PREPROS (native approach without the use of frameworks and libraries) - Apache server, ORACLE database.\n"+
    "                    One person was responsible for the project, so the processing front and back is up to me. During the work, I implemented a profile login system and access control to applications,\n"+
    "                    wrote the administrator's office (activity tracking, issuance of access rights to applications, etc.), wrote an application for accounting for the arrival and issuance of property of the service for the princes of warehouse accounting\n" +
    "                    (arrival, registration, assignment to the user, detailed information on equipment, output of the necessary data in EXEL)\n" +
    "                    He also created many programs by type (tabular journals, work plans, etc.).\n" +
    "                    Of the interesting tasks, a web software was created, the principle of which was to accept an EXEL file with data\n" +
    "                    reading and encrypting this data with the key sending to the database. In the database, the data is stored in encrypted form for decryption, a key is needed.\n" +
    "                    The key is stored locally in local sorage by the application administrator. If necessary, work with data administrator resets the key to users after which they can make their own changes. After the end of the work, a new EXEL is displayed and the data in the database is re-encrypted or deleted\n" +
    "                    at the request of the application administrator. This decision included the logonization of all actions occurring in the application, opening and closing access for departments.\n" +
    "                    All applications had a SPA model using AJAX, Responsive layout (LEPTOP, TABLET, MOBAIL)"},
    ['INCUBATOR']: {title: "IT-INCUBATOR", text: "Обучение в IT-INCUBATOR на FRONTEND DEVOLOPER. (REACT,REDUX, REDUX TOOLKIT, REACT NATIVE, VUE, ANGULAR) работа как с CRA так VITE приклодное (STYLED COMPONENT, FORMIK, PRITTER, MU, BOOTSTRAP)"}
}



