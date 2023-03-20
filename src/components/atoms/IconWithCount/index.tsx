import React from 'react';
import * as S from './index.styles';
import { IconWithCountProps } from './index.types';

export function IconWithCount({ children, count = 0 }: IconWithCountProps) {
  return (
    <S.Wrapper>
      {children}
      <S.Count>{count}</S.Count>
    </S.Wrapper>
  );
}
