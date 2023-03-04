import React from 'react';
import * as S from './index.styles';
import { NavigationItemProps } from './index.types';

export function NavigationItem({ children, clicked, ...rest }: NavigationItemProps) {
  return (
    <S.Wrapper clicked={clicked} {...rest}>
      {children}
    </S.Wrapper>
  );
}
