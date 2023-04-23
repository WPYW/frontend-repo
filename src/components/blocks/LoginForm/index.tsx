import React, { useEffect, useState } from 'react';
import * as S from './index.styles';
import kakaoIcon from './kakao.png';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export function LoginForm() { 
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const onChange_email=(e:any) => {
        const result = e.target.value 
        setemail(result)
    }
    const onChange_password=(e:any) => {
        const result = e.target.value 
        setpassword(result)
    }
    console.log("email" + email)
    console.log("password" + password)
    const onclick = () =>{fetch("/login")
    .then((response) => {console.log(response.json())})}

    return (
    <S.LoginPageWrapper>
        <S.LoginFormWrapper>
            <S.Title>로그인</S.Title>
            <S.TitleInfo>e-mail</S.TitleInfo>
            <S.Input type="email" placeholder="이메일 입력" onChange={onChange_email}/>
            <S.TitleInfo>비밀번호</S.TitleInfo>
            <S.Input type="password" placeholder="비밀번호" onChange={onChange_password}/>
            
            <S.Container>
                <S.Button formAction='' onClick={onclick}>로그인</S.Button>
                <S.Button formAction='' onClick={onclick}>회원가입</S.Button>
            </S.Container>
            <S.KakaoButton formAction='' onClick={onclick}>
                <img src={kakaoIcon} alt="KakaoTalk Icon" />
                카카오톡 로그인
            </S.KakaoButton>
        </S.LoginFormWrapper>
    </S.LoginPageWrapper>
    )
}
