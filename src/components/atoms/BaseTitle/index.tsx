import React from 'react';
import * as S from './index.styles';
import { BaseTitleProps } from './index.types';

export function BaseTitle({ children }: BaseTitleProps) {
  return <S.Title>{children}</S.Title>;
}
