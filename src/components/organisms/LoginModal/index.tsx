import React from 'react';
import * as S from './index.styles';

import { Modal } from '@/components/blocks';

import { useDispatch, useSelector } from 'react-redux';
import { loginModalClose } from '@/stores/slices/loginModalSlice';
import { RootState } from '@/stores/store';

import { KAKAO_URL } from '@/common/url';

import KaKaoIconPath from '@/assets/kakao_login_medium_narrow.png';

export function LoginModal() {
  const isOpen = useSelector((state: RootState) => state.loginModal.isOpen);

  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpen} modalCloseHandler={() => dispatch(loginModalClose())}>
      <S.Wrapper>
        <S.KaKaoButton onClick={() => (window.location.href = KAKAO_URL)}>
          <img src={KaKaoIconPath} />
        </S.KaKaoButton>
      </S.Wrapper>
    </Modal>
  );
}
