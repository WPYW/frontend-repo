import styled, { css, keyframes } from 'styled-components';
import { DarkModeToggleProps } from './index.types';

export const Wrapper = styled.div<Pick<DarkModeToggleProps, 'mode'>>`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 30px;

  position: relative;

  padding: 10px 20px;

  border: 4px solid;
  border-color: var(--main-color-orange);
  border-radius: 100px;

  cursor: pointer;

  &::after {
    content: '';

    display: block;
    width: 40px;
    height: 40px;

    background-color: var(--main-color-orange);
    border-radius: 50%;

    position: absolute;

    z-index: -1;

    ${(props) =>
      props['mode'] === 'light'
        ? css`
            left: 14px;
            animation: ${LightToDark} 0.5s;
          `
        : css`
            right: 14px;
            animation: ${DarkToLight} 0.5s;
          `}
  }

  @media only screen and (max-width: 420px) {
    gap: 20px;

    padding: 8px 10px;

    &::after {
      width: 30px;
      height: 30px;

      ${(props) =>
        props['mode'] === 'light'
          ? css`
              left: 5px;
              animation: ${LightToDark} 0.5s;
            `
          : css`
              right: 5px;
              animation: ${DarkToLight} 0.5s;
            `}
    }
  }
`;

export const Sun = styled.img`
  width: 30px;
  height: 30px;

  @media only screen and (max-width: 420px) {
    width: 20px;
    height: 20px;
  }
`;

export const Moon = styled.img`
  width: 30px;
  height: 30px;

  @media only screen and (max-width: 420px) {
    width: 20px;
    height: 20px;
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

const LightToDark = keyframes`
  0% {
    transform: translateX(50px);
  }

  100% {
    transform: translateX(0px);
  }
`;
