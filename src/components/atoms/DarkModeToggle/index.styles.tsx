import styled, { css, keyframes } from 'styled-components';
import { DarkModeToggleProps } from './index.types';

export const Wrapper = styled.div<Pick<DarkModeToggleProps, 'mode'>>`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 16px;

  position: relative;

  padding: 6px 8px;

  border: 3px solid;
  border-color: var(--main-color-orange);
  border-radius: 100px;

  cursor: pointer;

  z-index: 1000;

  &::after {
    content: '';

    display: block;
    width: 20px;
    height: 20px;

    background-color: var(--main-color-orange);
    border-radius: 50%;

    position: absolute;

    z-index: -1;

    ${(props) =>
      props['mode'] === 'light'
        ? css`
            left: 4px;
            animation: ${DarkToLight} 0.5s;
          `
        : css`
            right: 4px;
            animation: ${LightToDark} 0.5s;
          `}
  }

  @media only screen and (max-width: 420px) {
    gap: 12px;

    padding: 4px 6px;

    &::after {
      width: 16px;
      height: 16px;

      ${(props) =>
        props['mode'] === 'light'
          ? css`
              left: 3px;
              animation: ${DarkToLight} 0.5s;
            `
          : css`
              right: 3px;
              animation: ${LightToDark} 0.5s;
            `}
    }
  }
`;

export const Sun = styled.img`
  width: 12px;
  height: 12px;

  @media only screen and (max-width: 420px) {
    width: 10px;
    height: 10px;
  }
`;

export const Moon = styled.img`
  width: 12px;
  height: 12px;

  @media only screen and (max-width: 420px) {
    width: 10px;
    height: 10px;
  }
`;

const LightToDark = keyframes`
  0% {
    transform: translateX(-30px);
  }
  

  100% {
    transform: translateX(0px);
  }
`;

const DarkToLight = keyframes`
  0% {
    transform: translateX(30px);
  }

  100% {
    transform: translateX(0px);
  }
`;
