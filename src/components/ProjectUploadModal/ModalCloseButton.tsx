import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { modalClose } from '@/RTK/slices/modalSlice';

export function ModalCloseButton() {
  const dispatch = useDispatch();

  return (
    <ModalCloseButtonWrapper>
      <CloseButton type="button" onClick={() => dispatch(modalClose())}>
        닫기
      </CloseButton>
    </ModalCloseButtonWrapper>
  );
}

const ModalCloseButtonWrapper = styled.div``;
const CloseButton = styled.button``;
