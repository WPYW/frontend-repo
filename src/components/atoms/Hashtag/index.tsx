import React from 'react';
import * as S from './index.styles';
import { HashtagProps } from './index.types';

export function Hashtag({ children }: HashtagProps) {
  return <S.Wrapper>{`# ${children}`}</S.Wrapper>;
}
