import styled, { css } from 'styled-components';

import { CarouselButtonProps } from './index.types';

import { ReactComponent as CarouselButtonLeft } from '@/assets/arrow-left.svg';
import { ReactComponent as CarouselButtonRight } from '@/assets/arrow-right.svg';

export const Wrapper = styled.div`
  border-radius: 10px;

  overflow: hidden;

  position: relative;

  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
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

export const ButtonImage = styled.img`
  max-width: 30px;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }
`;

export const ButtonLeftImage = styled(CarouselButtonLeft)`
  width: 30px;
  height: 30px;

  transition: all 0.2s ease-in-out 0s;

  &:hover {
    fill: var(--main-color-orange);
    transform: translateY(-2px);
  }
`;

export const ButtonRightImage = styled(CarouselButtonRight)`
  width: 30px;
  height: 30px;

  transition: all 0.2s ease-in-out 0s;

  &:hover {
    fill: var(--main-color-orange);
    transform: translateY(-2px);
  }
`;
