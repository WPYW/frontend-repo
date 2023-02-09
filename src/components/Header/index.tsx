import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { modalOpen } from '@/RTK/slices/modalSlice';

export function Header() {
  const dispatch = useDispatch();

  const DarkModeHandler = () => {
    const colorMode = window.document.body.classList.item(0);
    if (colorMode === 'dark') {
      window.document.body.classList.replace('dark', 'light');
      window.localStorage.setItem('color_mode', 'light');
    }
    if (colorMode === 'light') {
      window.document.body.classList.replace('light', 'dark');
      window.localStorage.setItem('color_mode', 'dark');
    }
  };

  return (
    <HeaderWrapper>
      <HeaderLogoWrapper>
        <HeaderLogo>LOGO</HeaderLogo>
      </HeaderLogoWrapper>
      <ButtonWrapper>
        <ProjectUploadModalButton onClick={() => dispatch(modalOpen())}>
          링크 등록
        </ProjectUploadModalButton>
        <DarkModeButton onClick={DarkModeHandler}>다크 모드</DarkModeButton>
      </ButtonWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  border: 2px solid limegreen;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogoWrapper = styled.div`
  border: 2px solid limegreen;

  padding: 16px;
`;

const HeaderLogo = styled.span`
  border: 2px solid limegreen;
`;

const ButtonWrapper = styled.div`
  border: 2px solid limegreen;

  padding: 16px;

  display: flex;
  gap: 20px;
`;

const ProjectUploadModalButton = styled.button`
  border: 2px solid limegreen;

  background: none;
`;

const DarkModeButton = styled.button`
  border: 2px solid limegreen;

  background: none;
`;
