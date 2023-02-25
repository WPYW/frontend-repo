import React from 'react';

import * as S from './index.styles';

import { DarkModeToggleProps } from './index.types';

import lightModeSunPath from '@/assets/light-mode-sun.svg';
import darkModeSunPath from '@/assets/dark-mode-sun.svg';
import lightModeMoonPath from '@/assets/light-mode-moon.svg';
import darkModeMoonPath from '@/assets/dark-mode-moon.svg';

export default function DarkModeToggle({ mode, onClick }: DarkModeToggleProps) {
  return (
    <S.Wrapper mode={mode} onClick={onClick}>
      <S.Sun
        src={mode === 'light' ? lightModeSunPath : darkModeSunPath}
        alt="darkModeToggle SunSide"
      />
      <S.Moon
        src={mode === 'light' ? lightModeMoonPath : darkModeMoonPath}
        alt="darkModeToggle MoonSide"
      />
    </S.Wrapper>
  );
}
