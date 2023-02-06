import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { modalClose } from '@/RTK/slices/modalSlice';

export function ModalCloseButton() {
  const dispatch = useDispatch();

  return (
    <ButtonWrapper>
      <Button type="button" onClick={() => dispatch(modalClose())}>
        닫기
      </Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div``;
const Button = styled.button``;
