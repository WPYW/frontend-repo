import styled, { css, keyframes } from 'styled-components';
import { DarkModeToggleProps } from './index.types';

export const Wrapper = styled.div<Pick<DarkModeToggleProps, 'mode'>>`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 20px;

  position: relative;

  padding: 8px 10px;

  border: 4px solid;
  border-color: var(--main-color-orange);
  border-radius: 100px;

  cursor: pointer;

  &::after {
    content: '';

    display: block;
    width: 30px;
    height: 30px;

    background-color: var(--main-color-orange);
    border-radius: 50%;

    position: absolute;

    z-index: -1;

    ${(props) =>
      props['mode'] === 'light'
        ? css`
            left: 5px;
            animation: ${DarkToLight} 0.5s;
          `
        : css`
            right: 5px;
            animation: ${LightToDark} 0.5s;
          `}
  }

  @media only screen and (max-width: 420px) {
    gap: 15px;

    padding: 6px 8px;

    &::after {
      width: 25px;
      height: 25px;

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
  width: 20px;
  height: 20px;

  @media only screen and (max-width: 420px) {
    width: 15px;
    height: 15px;
  }
`;

export const Moon = styled.img`
  width: 20px;
  height: 20px;

  @media only screen and (max-width: 420px) {
    width: 15px;
    height: 15px;
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
