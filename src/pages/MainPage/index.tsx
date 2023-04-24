import React, { useEffect } from 'react';
import * as S from './index.styles';

import { SideBar } from '@/components/blocks';

import { CardList } from '@/components/organisms/PromoteProject';

import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { BACKEND_API_URL } from '@/common/url';

export default function MainPage() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    const authorizationCode = searchParams.get('code');

    if (authorizationCode !== null) {
      fetch(`${BACKEND_API_URL}/accounts/kakao/callback/?code=${authorizationCode}`)
        .then((res) => res.json())
        .then((res) => {
          const { access: accessToken, refresh: refreshToken } = res.token;
          console.log(accessToken, refreshToken);
        })
        .then(() => navigate('/'));
    }
  }, [searchParams]);

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
