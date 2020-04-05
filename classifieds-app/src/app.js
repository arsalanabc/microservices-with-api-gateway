import React from "react";
import styled from "styled-components";

import Container from "./components/container"

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;

const App = () => {
    return(
        <Wrapper>
        <Container />
      </Wrapper>);
};

export default App;


