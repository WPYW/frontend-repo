import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as S from './index.styles';

import { SideBarItem } from '@/components/atoms';

export function SideBar() {
  const [$headerClicked, setHeaderClicked] = useState(false);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <S.Wrapper>
      <S.Header onClick={() => setHeaderClicked((prev) => !prev)}>
        <S.SideBarIcon $headerClicked={$headerClicked} />
        목록
      </S.Header>
      <S.SubWrapper $headerClicked={$headerClicked}>
        <SideBarItem
          id="promote"
          clicked={searchParams.get('purpose') === 'promote'}
          onClick={() => navigate('/?purpose=promote')}
        >
          💻 프로젝트 홍보
        </SideBarItem>
        <SideBarItem
          id="recruits"
          clicked={searchParams.get('purpose') === 'recruits'}
          onClick={() => navigate('/recruits?purpose=recruits')}
        >
          🧑🏻‍💻 프로젝트 / 스터디 모집
        </SideBarItem>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
