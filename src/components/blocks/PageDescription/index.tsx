import React from 'react';
import * as S from './index.styles';

import { BaseTitle, BaseDescription } from '@/components/atoms';
import { PageDescriptionProps } from './index.types';

export function PageDescription({ title, description }: PageDescriptionProps) {
  return (
    <S.Wrapper>
      <BaseTitle>{title}</BaseTitle>
      <BaseDescription>{description}</BaseDescription>
    </S.Wrapper>
  );
}
