import React from 'react';
import * as S from './index.styles';
import { HeaderLogoProps } from './index.types';

import lightHeaderLogoPath from '@/assets/logo-light.svg';
import darkHeaderLogoPath from '@/assets/logo-dark.svg';

export function HeaderLogo({ mode }: HeaderLogoProps) {
  return (
    <S.Wrapper href="/" aria-label="Header logo link for mainpage">
      <S.Logo src={mode === 'light' ? lightHeaderLogoPath : darkHeaderLogoPath} alt="header logo" />
    </S.Wrapper>
  );
}
