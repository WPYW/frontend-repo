import React, { useEffect, useRef, useState } from 'react';
import * as S from './index.styles';
import { CardProps } from './index.types';

import viewsIconPath from '@/assets/views-icon.svg';
import usersIconPath from '@/assets/users-icon.svg';
import { Hashtags } from '../Hashtags';

import { IconWithCount } from '@/components/atoms';

export function StudyCard({ studys }: CardProps) {
  const {
    id,
    password,
    studyHashtag,
    studyTitle,
    studyDescription,
    contactInfo,
    views,
    studyMember,
    created,
    deadline,
    remote,
  } = studys;

  const ref = useRef<HTMLParagraphElement>(null);

  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    if (ref.current && ref.current.clientHeight > 108) {
      setOverlay(true);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.CardHeaderWrapper>
        <Hashtags hashtags={studyHashtag} />
        <S.Dday>{deadline}</S.Dday>
      </S.CardHeaderWrapper>
      <S.CardBodyWrapper>
        <S.Title>{studyTitle}</S.Title>
        <S.Description ref={ref} overlay={overlay}>
          {studyDescription}
        </S.Description>
      </S.CardBodyWrapper>
      <S.CardFooterWrapper>
        <S.Created>{created}</S.Created>
        <div style={{ display: 'flex', gap: '10px' }}>
          <IconWithCount count={views}>
            <S.Views />
          </IconWithCount>
          <IconWithCount count={studyMember}>
            <S.Likes />
          </IconWithCount>
        </div>
      </S.CardFooterWrapper>
    </S.Wrapper>
  );
}
