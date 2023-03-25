import React, { useEffect, useState } from 'react';
import * as S from './index.styles';

import { Modal } from '@/components/blocks';
import { BACKEND_API_URL } from '@/common/url';

interface IDetail {
  title: string;
  description: string;
}

export function RecruitDetail() {
  const [detail, setDetail] = useState<IDetail>({ title: '', description: '' });
  useEffect(() => {
    fetch(`${BACKEND_API_URL}/recruits/:id`)
      .then((res) => res.json())
      .then((res) => setDetail(res));
  }, []);

  console.log(detail);

  return (
    <Modal isOpen={true} modalCloseHandler={() => null}>
      <S.Wrapper>
        <S.Title>{detail.title}</S.Title>
        <S.Description>{detail.description}</S.Description>
      </S.Wrapper>
    </Modal>
  );
}
