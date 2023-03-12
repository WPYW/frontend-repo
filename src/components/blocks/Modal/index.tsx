import React, { useEffect } from 'react';
import * as S from './index.styles';
import { ModalProps } from './index.types';

import { useDispatch } from 'react-redux';
import { uploadModalClose } from '@/stores/slices/uploadModalSlice';

export function Modal({ children, isOpen }: ModalProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, [isOpen]);

  return (
    <S.ModalOverlay isOpen={isOpen} onClick={() => dispatch(uploadModalClose())}>
      <S.Wrapper onClick={(event) => event.stopPropagation()}>{children}</S.Wrapper>
    </S.ModalOverlay>
  );
}
