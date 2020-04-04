import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./app";


const GlobalSyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html, body, #app{
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
}
body {
    font-family: 'Roboto', sans-serif;
}
`;

render(<>
    <GlobalSyle />
    <App />
    </>, document.getElementById("app"));