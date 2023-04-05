import React, { useEffect } from 'react';
import reactDom from 'react-dom';
import * as S from './index.styles';
import { ModalProps, PortalModalProps } from './index.types';

function PortalModal({ children }: PortalModalProps) {
  const modalRoot = document.getElementById('portal-root');

  if (modalRoot !== null) return reactDom.createPortal(children, modalRoot);

  return null;
}

export function Modal({ children, isOpen, modalCloseHandler }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow: hidden;
      width: 100%;`;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, [isOpen]);

  return (
    <PortalModal>
      <S.ModalOverlay isOpen={isOpen} onClick={modalCloseHandler}>
        <S.CloseButton />
        <S.Wrapper onClick={(event) => event.stopPropagation()}>{children}</S.Wrapper>
      </S.ModalOverlay>
    </PortalModal>
  );
}
