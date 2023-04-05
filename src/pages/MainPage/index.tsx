import React from 'react';
import * as S from './index.styles';

import { SideBar } from '@/components/blocks';

import { CardList } from '@/components/organisms/PromoteProject';

import { Outlet } from 'react-router-dom';

export default function MainPage() {
  return (
    <S.Wrapper>
      <S.ColumnLeft>
        <SideBar />
      </S.ColumnLeft>
      <S.ColumnRight>
        <CardList />
      </S.ColumnRight>
      <Outlet />
    </S.Wrapper>
  );
}
