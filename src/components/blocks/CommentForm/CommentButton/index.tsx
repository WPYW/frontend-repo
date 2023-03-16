import React from 'react';
import * as S from './index.styles';
import { CommentButtonProps } from './index.types';

export function CommentButton({ children, ...rest }: CommentButtonProps) {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
}
