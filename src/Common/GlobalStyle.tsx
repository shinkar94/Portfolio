import {createGlobalStyle} from "styled-components";
import {useEffect, useState} from "react";
// import KamerikFont from '../fonts/kamerik205-heavy.woff2';


export const GlobalStyle = createGlobalStyle`
  body{
    background-color: #000;
    color: #fff;
    /*font-family: kamerik-3d;*/
    --transition_l7: 100vh;
    --transition_l3: 0vw;
    --transition_l2: 0vw;
  }
  // @font-face {
  //   font-family: 'kamerik-3d';
  
  //   font-weight: 900;
  // }
  
  ::-webkit-scrollbar {
    width: 0;
    background: #86ADD4;
  }
  ::-webkit-scrollbar-track {
    border: 1px solid rgba(255, 255, 255, 0.25);
    -webkit-box-shadow: inset 0 0 2.5px 2px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 2.5px 2px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #3765E8, #00ffff);
    border-radius: 15px;
  }
`