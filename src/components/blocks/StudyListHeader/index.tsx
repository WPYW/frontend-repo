import React, { useState } from 'react';
import * as S from './index.styles';

import { NavigationItem, SearchBar } from '@/components/atoms';
import { useDispatch } from 'react-redux';
import { IProjectListHeaderProps } from './index.types';

export function StudyListHeader({ ordering, setParams }: IProjectListHeaderProps) {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setParams((prev) => ({ ...prev, ordering: (event.target as HTMLElement).id }));
  };

  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.NavigationWrapper>
          <NavigationItem id="created" clicked={ordering === 'created'} onClick={onClickHandler}>
            최신순
          </NavigationItem>
          <NavigationItem id="frontend" clicked={ordering === 'frontend'} onClick={onClickHandler}>
            프론트엔드
          </NavigationItem>
          <NavigationItem id="backend" clicked={ordering === 'backend'} onClick={onClickHandler}>
            백엔드
          </NavigationItem>
          <NavigationItem id="mobile" clicked={ordering === 'mobile'} onClick={onClickHandler}>
            모바일
          </NavigationItem>
          <NavigationItem id="etc" clicked={ordering === 'etc'} onClick={onClickHandler}>
            기타
          </NavigationItem>
        </S.NavigationWrapper>
        <S.Button>스터디 모집</S.Button>
      </S.SubWrapper>
      <SearchBar
        placeholder="최고의 팀원을 찾아보세요~"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </S.Wrapper>
  );
}
