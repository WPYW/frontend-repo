import styled, { css, keyframes } from 'styled-components';

import { CarouselButtonProps, DotProps } from './index.types';

import { ReactComponent as CarouselButtonLeft } from '@/assets/arrow-left.svg';
import { ReactComponent as CarouselButtonRight } from '@/assets/arrow-right.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SubWrapper = styled.div`
  border-radius: 10px;

  overflow: hidden;

  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  display: block;
  width: 100%;

  transition: all 0.1s ease-in-out;
`;

export const Button = styled.button<Pick<CarouselButtonProps, 'direction'>>`
  all: unset;

  display: flex;
  align-items: center;

  position: absolute;

  height: 100%;

  ${(props) => {
    if (props.direction === 'left') {
      return css`
        left: 0;
        padding-left: 20px;
      `;
    }

    if (props.direction === 'right') {
      return css`
        right: 0;
        padding-right: 20px;
      `;
    }
  }}

  cursor: pointer;
`;

const leftAnimation = keyframes`
  0% {
    transform: translateX(0px);
  }

  50% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0px);
  }
`;

export const ButtonLeftImage = styled(CarouselButtonLeft)`
  width: 30px;
  height: 30px;

  /* transition: all 0.2s ease-in-out 0s; */

  animation: ${leftAnimation} 1s infinite;
`;

const rightAnimation = keyframes`
  0% {
    transform: translateX(0px);
  }

  50% {
    transform: translateX(-10px);
  }

  100% {
    transform: translateX(0px);
  }
`;

export const ButtonRightImage = styled(CarouselButtonRight)`
  width: 30px;
  height: 30px;

  /* transition: all 0.2s ease-in-out 0s; */

  animation: ${rightAnimation} 1s infinite;
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Dot = styled.div<DotProps>`
  width: 16px;
  height: 16px;

  background-color: #6a6a6a69;

  border-radius: 50%;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--main-color-orange);
    `}
`;
