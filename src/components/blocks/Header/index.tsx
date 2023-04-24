import React from 'react';
import * as S from './index.styles';

import { DarkModeToggle } from '@/components/atoms';
import { LoginButton } from '@/components/atoms/LoginButton';

export function Header() {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.LogoWrapper href="/" aria-label="Header logo link for mainpage">
          <S.Logo />
        </S.LogoWrapper>
        <S.ToggleLoginButtonWrapper>
          <DarkModeToggle />
          <LoginButton>로그인</LoginButton>
        </S.ToggleLoginButtonWrapper>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
