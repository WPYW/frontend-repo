import React, { useState } from 'react';
import * as S from './index.styles';
import { ProjectCardListHeaderProps } from './index.types';

import { BaseButton, NavigationItem, SearchBar } from '@/components/atoms';
import { useDispatch } from 'react-redux';
import { uploadModalOpen } from '@/stores/slices/uploadModalSlice';

export function ProjectCardListHeader({ ordering, setParams }: ProjectCardListHeaderProps) {
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
          <NavigationItem id="views" clicked={ordering === 'views'} onClick={onClickHandler}>
            조회수순
          </NavigationItem>
          <NavigationItem id="likes" clicked={ordering === 'likes'} onClick={onClickHandler}>
            좋아요순
          </NavigationItem>
        </S.NavigationWrapper>
        <BaseButton onClick={() => dispatch(uploadModalOpen())}>프로젝트 업로드</BaseButton>
      </S.SubWrapper>
      <SearchBar
        placeholder="어떤 프로젝트를 찾으시나요?"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setParams((prev) => ({ ...prev, search: event.target.value }));
        }}
      />
    </S.Wrapper>
  );
}
