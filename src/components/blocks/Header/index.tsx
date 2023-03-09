import React from 'react';

import * as S from './index.styles';

import { HeaderLogo, DarkModeToggle } from '@/components/atoms';

export function Header() {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <HeaderLogo />
        <DarkModeToggle />
      </S.SubWrapper>
    </S.Wrapper>
  );
}
