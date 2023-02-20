import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as HeaderLogoLight } from '@/assets/logo-light.svg';
import { ReactComponent as HeaderLogodark } from '@/assets/logo-dark.svg';

import { ReactComponent as LightSun } from '@/assets/light-mode-sun.svg';
import { ReactComponent as LightMoon } from '@/assets/light-mode-moon.svg';

import { ReactComponent as DarkSun } from '@/assets/dark-mode-sun.svg';
import { ReactComponent as DarkMoon } from '@/assets/dark-mode-moon.svg';

export function Header() {
  const [mode, setMode] = useState('');

  useEffect(() => {
    const colorMode = window.localStorage.getItem('color_mode') || 'dark';
    window.document.body.classList.add(colorMode);
    setMode(window.document.body.classList.item(0) || 'dark');
  }, []);

  const DarkModeHandler = () => {
    const colorMode = window.document.body.classList.item(0);
    if (colorMode === 'dark') {
      window.document.body.classList.replace('dark', 'light');
      window.localStorage.setItem('color_mode', 'light');
      setMode(window.document.body.classList.item(0) || 'light');
    }
    if (colorMode === 'light') {
      window.document.body.classList.replace('light', 'dark');
      window.localStorage.setItem('color_mode', 'dark');
      setMode(window.document.body.classList.item(0) || 'dark');
    }
  };

  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLogoWrapper>
          {mode === 'light' && <HeaderLogoLight />}
          {mode === 'dark' && <HeaderLogodark />}
        </HeaderLogoWrapper>
      </Link>
      <DarkModeToggleWrapper onClick={DarkModeHandler} data-mode={mode}>
        <DarkModeToggleSunWrapper>
          {mode === 'light' && (
            <LightSun style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
          {mode === 'dark' && (
            <DarkSun style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
        </DarkModeToggleSunWrapper>
        <DarkModeToggleMoonWrapper>
          {mode === 'light' && (
            <LightMoon style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}{' '}
          {mode === 'dark' && (
            <DarkMoon style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
        </DarkModeToggleMoonWrapper>
      </DarkModeToggleWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  padding: 16px 32px 16px 32px;

  background-color: var(--header-background-color);

  z-index: 1000;
`;

const HeaderLogoWrapper = styled.div`
  padding: 8px;
`;

const LightToDark = keyframes`
  0% {
    transform: translateX(50px);
  }

  100% {
    transform: translateX(0px);
  }
`;

const DarkToLight = keyframes`
  0% {
    transform: translateX(-50px);
  }

  100% {
    transform: translateX(0px);
  }
`;

const DarkModeToggleWrapper = styled.div<{ 'data-mode': string }>`
  border: 2px solid;
  border-color: var(--dark-mode-toggle-border-color);
  border-radius: 100px;

  padding: 8px 12px;

  display: flex;
  align-items: center;
  gap: 20px;

  position: relative;

  cursor: pointer;

  &::after {
    content: '';

    display: block;
    width: 30px;
    height: 30px;

    background-color: var(--dark-mode-toggle-background-color);
    border-radius: 50%;

    position: absolute;

    ${(props) =>
      props['data-mode'] === 'light'
        ? css`
            left: 7px;
            animation: ${LightToDark} 0.5s;
          `
        : css`
            right: 7px;
            animation: ${DarkToLight} 0.5s;
          `}

    z-index: -1;
  }
`;

const DarkModeToggleSunWrapper = styled.div`
  width: 20px;
  height: 20px;

  object-fit: cover;
`;

const DarkModeToggleMoonWrapper = styled.div`
  width: 20px;
  height: 20px;

  object-fit: cover;
`;
