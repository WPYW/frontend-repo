import React from 'react';
import * as S from './index.styles';

import { BaseTitle, BaseDescription } from '@/components/atoms';
import { PageDescriptionProps } from './index.types';

/** white-space 적용하려면 description={\`설명\`} 같은 방식으로 사용 */
export function PageDescription({ title, description }: PageDescriptionProps) {
  return (
    <S.Wrapper>
      <BaseTitle>{title}</BaseTitle>
      <BaseDescription>{description}</BaseDescription>
    </S.Wrapper>
  );
}
