import React from 'react';
import * as S from './index.styles';
import { BaseDescriptionProps } from './index.types';

export function BaseDescription({ children }: BaseDescriptionProps) {
  return <S.Description>{children}</S.Description>;
}
