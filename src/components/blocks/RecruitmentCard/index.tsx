import React, { useEffect, useRef, useState } from 'react';
import * as S from './index.styles';
import { CardProps } from './index.types';

import { IconWithCount } from '@/components/atoms';
import { useDispatch } from 'react-redux';
import { promoteProjectDetailModalOpen } from '@/stores/slices/promoteProjectDetailModal';
import { Link, useLocation } from 'react-router-dom';
import { Hashtags } from '../Hashtags';

export function RecruitCard({ recruits }: CardProps) {
  const { id, title, description, recruitHashtag, views, recruitMember, created, deadline } =
    recruits;

  const ref = useRef<HTMLParagraphElement>(null);

  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    if (ref.current && ref.current.clientHeight > 108) {
      setOverlay(true);
    }
  }, []);

  const dispatch = useDispatch();

  const location = useLocation();

  return (
    <Link to={`/recruits/${id}`} state={{ background: location }} preventScrollReset={true}>
      <S.Wrapper
        onClick={() => {
          dispatch(promoteProjectDetailModalOpen());
        }}
      >
        <S.CardHeaderWrapper>
          <Hashtags hashtags={recruitHashtag} />
        </S.CardHeaderWrapper>

        <S.CardBodyWrapper>
          <S.Title>{title}</S.Title>
          <S.Description ref={ref} overlay={overlay}>
            {description}
          </S.Description>
        </S.CardBodyWrapper>

        <S.CardFooterWrapper>
          <S.Created>{created}</S.Created>
          <div style={{ display: 'flex', gap: '10px' }}>
            <S.Created>{deadline}</S.Created>
            <IconWithCount count={views}>
              <S.Views />
            </IconWithCount>
            <IconWithCount count={recruitMember}>
              <S.Likes />
            </IconWithCount>
          </div>
        </S.CardFooterWrapper>
      </S.Wrapper>
    </Link>
  );
}
