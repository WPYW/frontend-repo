import React, { useEffect, useRef, useState } from 'react';
import * as S from './index.styles';
import { CardProps } from './index.types';

import viewsIconPath from '@/assets/views-icon.svg';
import likesIconPath from '@/assets/likes-icon.svg';

import { Hashtags } from '../Hashtags';
import { Carousel } from '../Carousel';
import { IconWithCount } from '@/components/atoms';

export function Card({ project }: CardProps) {
  const { projectTitle, projectDescription, previewImages, projectHashtag, views, likes, created } =
    project;

  const ref = useRef<HTMLParagraphElement>(null);

  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    if (ref.current && ref.current.clientHeight > 288) {
      setOverlay(true);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.CardHeaderWrapper>
        <Hashtags hashtags={projectHashtag} />
      </S.CardHeaderWrapper>

      <S.CardBodyWrapper>
        <S.Title>{projectTitle}</S.Title>
        <Carousel imgUrlList={previewImages} />
        <S.Description ref={ref} overlay={overlay}>
          {projectDescription}
        </S.Description>
      </S.CardBodyWrapper>

      <S.CardFooterWrapper>
        <S.Created>{created}</S.Created>
        <div style={{ display: 'flex', gap: '10px' }}>
          <IconWithCount iconSrc={viewsIconPath} count={views} />
          <IconWithCount iconSrc={likesIconPath} count={likes} />
        </div>
      </S.CardFooterWrapper>
    </S.Wrapper>
  );
}
