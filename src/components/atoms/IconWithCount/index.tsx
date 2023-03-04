import React from 'react';
import * as S from './index.styles';
import { IconWithCountProps } from './index.types';

export function IconWithCount({ iconSrc, count = 0 }: IconWithCountProps) {
  return (
    <S.Wrapper>
      <S.Icon src={iconSrc} alt="icon" />
      <S.Count>{count}</S.Count>
    </S.Wrapper>
  );
}
