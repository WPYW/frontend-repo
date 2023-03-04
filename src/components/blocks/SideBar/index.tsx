import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './index.styles';

import { SideBarItem } from '@/components/atoms';

export function SideBar() {
  const [$headerClicked, setHeaderClicked] = useState(false);
  const [clickedSideBarItem, setClickedSideBarItem] = useState('promote');

  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Header onClick={() => setHeaderClicked((prev) => !prev)}>
        <S.SideBarIcon $headerClicked={$headerClicked} />
        목록
      </S.Header>
      <S.SubWrapper $headerClicked={$headerClicked}>
        <SideBarItem
          id="promote"
          clicked={clickedSideBarItem === 'promote'}
          onClick={(event) => {
            setClickedSideBarItem((event.target as HTMLElement).id);
            navigate('/');
          }}
        >
          💻 프로젝트 홍보
        </SideBarItem>
        <SideBarItem
          id="recruit"
          clicked={clickedSideBarItem === 'recruit'}
          onClick={(event) => {
            setClickedSideBarItem((event.target as HTMLElement).id);
            navigate('/');
          }}
        >
          🧑🏻‍💻 프로젝트 / 스터디 모집
        </SideBarItem>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
