import React, { useState, useEffect } from 'react';

import * as S from './index.styles';

import HeaderLogo from '@/components/atoms/HeaderLogo';
import DarkModeToggle from '@/components/atoms/DarkModeToggle';

export default function Header() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme');
    if (currentTheme === 'light') {
      window.document.body.classList.add('light');
    } else {
      window.document.body.classList.add('dark');
    }
  }, []);

  const onClickHandler = () => {
    const currentTheme = window.document.body.classList.contains('light') ? 'light' : 'dark';

    if (currentTheme === 'light') {
      window.document.body.classList.replace('light', 'dark');
      window.localStorage.setItem('theme', 'dark');
      setMode('dark');
    }

    if (currentTheme === 'dark') {
      window.document.body.classList.replace('dark', 'light');
      window.localStorage.setItem('theme', 'light');
      setMode('light');
    }
  };
  return (
    <S.Wrapper>
      <HeaderLogo mode={mode} />
      <DarkModeToggle mode={mode} onClick={onClickHandler} />
    </S.Wrapper>
  );
}
