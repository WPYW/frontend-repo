import React from 'react';
import * as S from './index.styles';
import { ModalFormProps } from './index.types';

export function ModalForm({ children }: ModalFormProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
