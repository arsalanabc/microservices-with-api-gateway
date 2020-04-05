import React from "react";
import styled from "styled-components";
import Content from "./content";
import SideBar from "./sideBar";

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 0 auto;
    width: 80rem;
`;

const Container = () => {
    return(
    <Wrapper>
        <Content />
        <SideBar />
    </Wrapper>
    );
}; 

export default Container;