import React from 'react';
import * as S from './index.styles';
import { SideBarItemProps } from './index.types';

export function SideBarItem({ children, ...rest }: SideBarItemProps) {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
}
