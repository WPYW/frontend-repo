import React from 'react';
import * as S from './index.styles';
import { BaseDescriptionProps } from './index.types';

/** @param type card 지정할 수 있음!  */
export function BaseDescription({ children, type }: BaseDescriptionProps) {
  return <S.Description type={type}>{children}</S.Description>;
}
