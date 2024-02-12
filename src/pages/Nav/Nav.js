import React from "react";
import styled from "styled-components";

const Nav = () => {
    return(
        <Navcontainer>
            <Contents>
                <Link to="/">
                    Link
                </Link>
                <Link to="/">하의</Link>
            </Contents>
        </Navcontainer>
    )
};

const Navcontainer = styled.nav`
    width:100%;
    border-bottom : 1px solid var(--font1);
`
const Contents = styled.div`
    display:flex;
    
`
const Link = styled.link`
 
`
export default Nav;