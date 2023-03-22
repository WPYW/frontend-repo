import React from 'react';
import * as S from './index.styles';
import { ModalProps } from './index.types';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/RTK/stores/recruitStore';
import { recruitModalClose } from '@/RTK/slices/recruitModalSlice';

export function Recruit({ children }: ModalProps) {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const dispatch = useDispatch();

  return (
    <S.ModalOverlay isOpen={isOpen} onClick={() => dispatch(recruitModalClose())}>
      <S.Wrapper onClick={(event) => event.stopPropagation()}>{children}</S.Wrapper>
    </S.ModalOverlay>
  );
}
