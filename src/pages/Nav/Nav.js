import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Nav = () => {
    return(
        <Navcontainer>
            <Contents>
                <StyledLink to="/top">상의</StyledLink>
                <StyledLink to="/pants">하의</StyledLink>
            </Contents>
        </Navcontainer>
    )
};

const Navcontainer = styled.nav`
    width:100%;
    height: 40px;
    line-height:40px;
    border-bottom : 1px solid var(--font1);
`
const Contents = styled.div`
    display:flex;
    width:100%;
    padding: 0 50px;
    
`
const StyledLink = styled(Link)`
 color: #000;
 width:100%;
`
export default Nav;