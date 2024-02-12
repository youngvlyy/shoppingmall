import React from "react";
import { Routes } from "react-router-dom";
import styled from "styled-components";
import Container from "../indexcss";
import google from "../../img/icon/ico-google.png"
import naver from "../../img/icon/ico-naver.png"


const LoginPage = () => {
    return(
        <Container>
            <Contents>
                <Leftcontent>
                    <h4>Login</h4>
                    <Input type="text" placeholder="id"/>
                    <Input type="text" placeholder="password"/>
                    <Checkbox>
                        <input type="checkbox" id="check"/>
                        <label htmlFor="check">아이디 저장</label>
                    </Checkbox>
                    <Button type="button">Log in</Button>
                    <Buttonwrap>
                        <Google type="button" source= {google}>구글 로그인</Google>
                        <Naver type="button" source={naver}>네이버 로그인</Naver>
                    </Buttonwrap>
                </Leftcontent>
                <Rightcontent>
                    <h4>New Member</h4>
                    <p>회원가입 하시면 다양한 혜택을 제공해드려요</p>
                    <Button type="button">sign up</Button>
                    <Awrap>
                        <a href="#">forgot id?</a>
                        <a href="#">forgot pw?</a>
                    </Awrap>
                </Rightcontent>
            </Contents>
        </Container>

    );
};

const Contents = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height:100%;
    padding:80px;

    &>div{
        display: flex;
        padding: 0 80px;
        flex-direction: column;
        align-items: center;
        width:100%;

        h4{
            color:var(--font1);
        }

    }
`
const Leftcontent = styled.div`

`
const Rightcontent = styled.div`
    p{
        font-size :12px;
    }
`
const Input = styled.input`
    border: 1px solid var(--color1);
    width : 100%;
    padding: 10px;

    & + &{
        margin-top: 20px;
    }
`

const Checkbox = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: row;
    width:100%;
    margin-top: 20px;

`
const Button = styled.button`
    width: 100%;
    padding : 10px;
    background-color: #fff;
    border: 1px solid var(--font1);
    margin-top: 20px;
    position: relative;
    
    &:hover{
        cursor: pointer;
    }
`

const Awrap = styled.div`
    width:100%;
    margin-top: 10px;
    a {
        font-size: 12px;
        color : var(--font1);

        & + a{
            margin-left: 20px;
        }
    }

`
const Buttonwrap = styled.div`
  width:100%;
`
const Google = styled(Button)`

    &::after{
        content:'';
        position: absolute;
        top:10px;
        left:10px;
        width:20px;
        height:20px;
        background: url(${google}) no-repeat center/20px;

        
    }
`
const Naver = styled(Google)`
    &::after{
        background: url(${naver}) no-repeat center/20px;

    }

`


export default LoginPage;