import React from 'react';
import * as S from './index.styles';
import { ModalButtonProps } from './index.types';

/** @param id : 닫기 버튼은 "close", 기본은 id 없어도 됨 */
export function ModalButton({ children, ...rest }: ModalButtonProps) {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
}
