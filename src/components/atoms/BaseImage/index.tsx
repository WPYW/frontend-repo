import React from 'react';
import * as S from './index.styles';
import { BaseImageProps } from './index.types';

export function BaseImage({ src, alt }: BaseImageProps) {
  return (
    <S.Wrapper>
      <S.Image src={src} alt={alt} />
    </S.Wrapper>
  );
}
