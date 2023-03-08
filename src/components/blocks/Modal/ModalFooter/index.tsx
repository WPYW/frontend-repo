import React from 'react';
import * as S from './index.styles';
import { ModalFooterProps } from './index.types';

export function ModalFooter({ children }: ModalFooterProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
