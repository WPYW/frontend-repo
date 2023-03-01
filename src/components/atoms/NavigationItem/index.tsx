import React from 'react';
import * as S from './index.styles';
import { NavigationItemProps } from './index.types';

export function NavigationItem({ children, clicked }: NavigationItemProps) {
  return <S.Wrapper clicked={clicked}>{children}</S.Wrapper>;
}
