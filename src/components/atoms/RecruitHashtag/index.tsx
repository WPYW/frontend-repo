import React from 'react';
import * as S from './index.styles';
import { RecruitHashtagProps } from './index.types';

export function RecruitHashtag({ children, ...rest }: RecruitHashtagProps) {
  return <S.Wrapper {...rest}>{`# ${children}`}</S.Wrapper>;
}
