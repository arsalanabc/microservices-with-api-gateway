import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import App from "./app";
import * as theme from "./theme";
import graphqlClient from "#root/api/graphqlClient";

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

render(
  <ApolloProvider client={graphqlClient}>
    <ThemeProvider theme={theme}>
      <GlobalSyle />
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("app")
);
