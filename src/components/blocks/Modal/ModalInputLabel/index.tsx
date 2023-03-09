import React from 'react';
import * as S from './index.styles';
import { ModalInputLabelProps } from './index.types';

export function ModalInputLabel({ label, optional, caution, children }: ModalInputLabelProps) {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.LabelWrapper>
          <S.Label>{label}</S.Label>
          {optional && <S.Optional> - Optional</S.Optional>}
        </S.LabelWrapper>
        {children}
      </S.SubWrapper>
      {caution && <S.Caution>{caution}</S.Caution>}
    </S.Wrapper>
  );
}
