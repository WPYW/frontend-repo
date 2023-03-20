import React from 'react';
import * as S from './index.styles';

import { AnchorWithIcon } from '@/components/atoms';
import { SideBarProps } from './index.types';

export function SideBar({ githubLink, demoSiteLink, likes }: SideBarProps) {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <AnchorWithIcon href={githubLink} target="_blank">
          <S.Github />
        </AnchorWithIcon>
        <AnchorWithIcon href={demoSiteLink} target="_blank">
          <S.DemoSite />
        </AnchorWithIcon>
        <S.LikeButton>
          <S.LikeIcon />
          <S.LikeCount>{likes}</S.LikeCount>
        </S.LikeButton>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
