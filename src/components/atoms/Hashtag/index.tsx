import React from 'react';
import * as S from './index.styles';
import { HashtagProps } from './index.types';

export function Hashtag({ children, ...rest }: HashtagProps) {
  return <S.Wrapper {...rest}>{`# ${children}`}</S.Wrapper>;
}
