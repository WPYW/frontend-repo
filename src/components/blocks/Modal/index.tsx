import React from 'react';
import * as S from './index.styles';
import { ModalProps } from './index.types';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/RTK/stores/store';
import { modalClose } from '@/RTK/slices/modalSlice';

export function Modal({ children }: ModalProps) {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const dispatch = useDispatch();

  return (
    <S.ModalOverlay isOpen={isOpen} onClick={() => dispatch(modalClose())}>
      <S.Wrapper onClick={(event) => event.stopPropagation()}>{children}</S.Wrapper>
    </S.ModalOverlay>
  );
}
