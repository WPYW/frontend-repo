import React from 'react';
import * as S from './index.styles';
import { SearchBarProps } from './index.types';

export function SearchBar({ ...rest }: SearchBarProps) {
  return (
    <S.Wrapper>
      <S.InputIcon />
      <S.Input type="text" {...rest} />
    </S.Wrapper>
  );
}
