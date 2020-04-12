import React from "react";
import styled from "styled-components";
import Login from "./Login/index"

const Wrapper = styled.div`
    flex: 0 auto;
    width: 10rem;
`;

const Sidebar = () => {
    return(
        <Wrapper>
            <Login />
        </Wrapper>

    );
};

export default Sidebar;