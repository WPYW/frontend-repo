import React from 'react';
import * as S from './index.styles';
import { ModalFooterProps } from './index.types';

export function RecruitModalFooter({ children }: ModalFooterProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
