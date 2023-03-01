import React, { useState } from 'react';
import * as S from './index.styles';
import { ProjectCardListHeaderProps } from './index.types';

import { NavigationItem, SearchBar } from '@/components/atoms';

export function ProjectCardListHeader({ setParams }: ProjectCardListHeaderProps) {
  const [activatedItem, setActivatedItem] = useState('');

  const [value, setValue] = useState('');

  return (
    <S.Wrapper>
      <S.NavigationWrapper>
        <NavigationItem
          clicked={activatedItem === '최신순'}
          onClick={(event) => {
            setActivatedItem((event.target as HTMLElement).innerHTML);
            setParams((prev) => ({ ...prev, ordering: 'created' }));
          }}
        >
          최신순
        </NavigationItem>
        <NavigationItem
          clicked={activatedItem === '조회수순'}
          onClick={(event) => {
            setActivatedItem((event.target as HTMLElement).innerHTML);
            setParams((prev) => ({ ...prev, ordering: 'views' }));
          }}
        >
          조회수순
        </NavigationItem>
        <NavigationItem
          clicked={activatedItem === '좋아요순'}
          onClick={(event) => {
            setActivatedItem((event.target as HTMLElement).innerHTML);
            setParams((prev) => ({ ...prev, ordering: 'likes' }));
          }}
        >
          좋아요순
        </NavigationItem>
      </S.NavigationWrapper>
      <SearchBar
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setParams((prev) => ({ ...prev, search: event.target.value }));
        }}
      />
    </S.Wrapper>
  );
}
