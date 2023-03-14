import React from 'react';
import * as S from './index.styles';
import { AnchorWithIconProps } from './index.types';

export function AnchorWithIcon({ children, href }: AnchorWithIconProps) {
  return (
    <S.Wrapper>
      <S.Anchor href={href} target="_blank">
        {children}
      </S.Anchor>
    </S.Wrapper>
  );
}
