import React from 'react';
import * as S from './index.styles';

import { DarkModeToggle } from '@/components/atoms';

export function Header() {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.LogoWrapper href="/" aria-label="Header logo link for mainpage">
          <S.Logo />
        </S.LogoWrapper>
        <DarkModeToggle />
      </S.SubWrapper>
    </S.Wrapper>
  );
}
