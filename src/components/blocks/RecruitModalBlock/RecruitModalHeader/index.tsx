import React from 'react';
import * as S from './index.styles';
import { RecruitModalHeaderProps } from './index.types';

export function RecruitModalHeader({ title, description }: RecruitModalHeaderProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
