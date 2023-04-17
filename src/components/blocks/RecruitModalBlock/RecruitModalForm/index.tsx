import React from 'react';
import * as S from './index.styles';
import { RecruitModalFormProps } from './index.types';

export function RecruitModalForm({ children }: RecruitModalFormProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
