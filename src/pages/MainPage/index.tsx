import React, { useEffect } from 'react';
import * as S from './index.styles';

import { SideBar } from '@/components/blocks';

import { CardList } from '@/components/organisms/PromoteProject';

import { Outlet, useLocation } from 'react-router-dom';

export default function MainPage() {
  const authorizationCode = useLocation().search.replace('?code=', '');
  useEffect(() => {
    fetch(`http://localhost/api/v1/accounts/kakao/login/callback?code=${authorizationCode}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
    console.log(authorizationCode);
  }, [authorizationCode]);

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
