import {createGlobalStyle} from "styled-components";
import {InitialAppType} from "../features/app/appReducer";


type appStateProps = {
    appState: InitialAppType
}

export const GlobalStyle = createGlobalStyle<appStateProps>`
  body{
    background-color: #000;
    color: #fff;
    --transition_l7: ${props => props.appState.transition_l7};
    --transition_l3: ${props => props.appState.transition_l3};
    --transition_l2: ${props => props.appState.transition_l2};
  }
  
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