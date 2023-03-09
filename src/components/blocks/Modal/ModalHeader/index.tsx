import React from 'react';
import * as S from './index.styles';
import { ModalHeaderProps } from './index.types';

export function ModalHeader({ title, description }: ModalHeaderProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
