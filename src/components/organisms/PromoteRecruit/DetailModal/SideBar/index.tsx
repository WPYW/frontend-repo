import React from 'react';
import * as S from './index.styles';

import { AnchorWithIcon } from '@/components/atoms';
import { SideBarProps } from './index.types';

export function SideBar({ contact, likes }: SideBarProps) {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <AnchorWithIcon href={contact} target="_blank">
          <S.Kakao />
        </AnchorWithIcon>
        <S.LikeButton>
          <S.LikeIcon />
          <S.LikeCount>{likes}</S.LikeCount>
        </S.LikeButton>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
