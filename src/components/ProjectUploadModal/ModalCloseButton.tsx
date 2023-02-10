import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { modalClose } from '@/RTK/slices/modalSlice';

export function ModalCloseButton() {
  const dispatch = useDispatch();

  return (
    <ButtonWrapper>
      <Button type="button" onClick={() => dispatch(modalClose())}></Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  position: absolute;
  right: 30px;
`;
const Button = styled.button`
  all: unset;

  width: 20px;
  height: 20px;

  background-image: url('/close-x.svg');
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;
