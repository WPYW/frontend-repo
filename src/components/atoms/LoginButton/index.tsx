import React from 'react';
import * as S from './index.styles';
import { LoginButtonProps } from './index.types';

import { useDispatch } from 'react-redux';
import { loginModalOpen } from '@/stores/slices/loginModalSlice';

export function LoginButton({ children, ...rest }: LoginButtonProps) {
  const dispatch = useDispatch();

  return (
    <S.Wrapper onClick={() => dispatch(loginModalOpen())} {...rest}>
      {children}
    </S.Wrapper>
  );
}
