import React from "react";
import styled from "styled-components";
import search from "../../img/icon/ico-search.svg"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <Container>
            <Contents>
                <Leftbtn>
                    <StyledLink to= '/login'>Login</StyledLink>
                    <StyledLink to= '/Join_us'>Join us</StyledLink>
                    <StyledLink to= '/My_page'>My page</StyledLink>
                </Leftbtn>
                <Logo to= '/main'>SY mall</Logo>
                <Searchwrap>
                    <input type="text" title="검색인풋"/>
                    <button type="button" source={search}><span className="hide">검색버튼</span></button>
                </Searchwrap>
            </Contents>
        </Container>
    );
};

const Leftbtn = styled.div`
    display: flex;

`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--font1);

    & + & {
        margin-left: 12px;
    }

`
const Logo = styled(Link)`
    font-size: 30px;
    color: var(--font2);
    font-weight: bold;
`
const Searchwrap = styled.div`
    border-bottom: 1px solid #C7C7C7;
    position:relative;
    width: 200px;

    button {
        padding:0;
        position:absolute;
        top:5px;
        right:0;
        width: 15px;
        height: 15px;
        background-image: url(${search});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 15px;
        border:0;
        background-color: transparent;

        &:hover{
            cursor: pointer;
        }
    }
    
    input {
        border: 0;
        padding: 5px 20px 5px 5px;
        
        width: 100%;
        &:focus{
            outline:0;
        }

    }
    
`
const Container = styled.header`
    height: 75px;
    border-bottom : 1px solid #E4E4E4;
    padding: 0 20px;
    
`
const Contents = styled.div`
    display: flex;
    height: inherit;
    justify-content: space-between;
    align-items: center;
`

export default Header;