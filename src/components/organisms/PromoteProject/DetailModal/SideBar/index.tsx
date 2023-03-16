import React from 'react';
import * as S from './index.styles';

import { AnchorWithIcon } from '@/components/atoms';
import { SideBarProps } from './index.types';

export function SideBar({ githubLink, demoSiteLink }: SideBarProps) {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <AnchorWithIcon href={githubLink} target="_blank">
          <S.Github />
        </AnchorWithIcon>
        <AnchorWithIcon href={demoSiteLink} target="_blank">
          <S.DemoSite />
        </AnchorWithIcon>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
