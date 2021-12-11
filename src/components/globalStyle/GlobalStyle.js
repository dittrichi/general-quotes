import { createGlobalStyle } from "styled-components";
import bgImage from "../../images/bg.jpeg"

export const GlobalStyle = createGlobalStyle`
    body {
        background: url(${bgImage})center no-repeat;
        background-size: cover;
        color: fff;
        padding: 0;
        margin: 0;
        font-family: 'Dosis', sans-serif;
    }
`;