import styled, { css } from 'styled-components';

import { DotProps } from './index.types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  min-height: 400px;

  overflow: hidden;

  @media screen and (max-width: 420px) {
    height: 180px;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 10px;

  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
