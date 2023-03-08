import React from 'react';
import * as S from './index.styles';
import { ModalButtonProps } from './index.types';

export function ModalButton({ children, ...rest }: ModalButtonProps) {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
}
