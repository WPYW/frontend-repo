import React, { useEffect, useState } from 'react';
import * as S from './index.styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export function SignupForm() { 
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirm, setconfirm] = useState("")
    const [name, setname] = useState("")

    const onChange_email=(e:any) => {
        const result = e.target.value 
        setemail(result)
    }
    const onChange_password=(e:any) => {
        const result = e.target.value 
        setpassword(result)
    }
    const onChange_confirm=(e:any) => {
        const result = e.target.value 
        setconfirm(result)
    }
    const onChange_name=(e:any) => {
        const result = e.target.value 
        setname(result)
    }

    console.log("email" + email)
    console.log("password" + password)
    console.log("confirm_Password" + confirm)
    console.log("name" + name)
    const onclick = () =>{}

    return (
        <S.SignupPageWrapper>
        <S.SignupFormWrapper>
          <S.Title>회원 기본 정보 입력</S.Title>
          <S.TitleInfo>e-mail</S.TitleInfo>
          <S.Input type="email" placeholder="이메일" onChange={onChange_email}/>
          <S.TitleInfo>비밀번호</S.TitleInfo>
          <S.Input type="password" placeholder="비밀번호" onChange={onChange_password}/>
          <S.TitleInfo>비밀번호 확인</S.TitleInfo>
          <S.Input type="password" placeholder="비밀번호 확인" onChange={onChange_confirm}/>
          <S.TitleInfo>이름</S.TitleInfo>
          <S.Input type="name" placeholder="이름" onChange={onChange_name}/>
          <S.Button formAction='' onClick={onclick}>회원가입</S.Button>
        </S.SignupFormWrapper>
      </S.SignupPageWrapper>
    )
}