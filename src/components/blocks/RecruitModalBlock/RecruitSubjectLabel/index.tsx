import React from 'react';
import * as S from './index.styles';
import { RecruitSubjectLabelProps } from './index.types';

export function RecruitSubjectLabel({ title }: RecruitSubjectLabelProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}
