import React from 'react';
import * as S from './index.styles';

export function LoadingDots() {
  return (
    <S.Wrapper>
      <S.DotLeft />
      <S.DotMid />
      <S.DotRight />
    </S.Wrapper>
  );
}
