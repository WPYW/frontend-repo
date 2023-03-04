import React, { useState } from 'react';
import * as S from './index.styles';
import { IParams } from './index.types';

import { LoadingDots } from '@/components/atoms';
import {
  ProjectCardList,
  ProjectCardListHeader,
  ScrollCatcher,
  SideBar,
} from '@/components/blocks';

import { useGetProjectList } from './useGetProjectList';

export default function MainPage() {
  const [params, setParams] = useState<IParams>({ ordering: 'created', search: '', page: 1 });

  const { projects, getNextPageDetector, isLoading } = useGetProjectList(params);

  return (
    <S.Wrapper>
      <S.ColumnLeft>
        <SideBar />
      </S.ColumnLeft>
      <S.ColumnRight>
        <ProjectCardListHeader ordering={params.ordering} setParams={setParams} />
        {isLoading ? <LoadingDots /> : <ProjectCardList projects={projects} />}
        <ScrollCatcher getNextPageDetector={getNextPageDetector} />
      </S.ColumnRight>
    </S.Wrapper>
  );
}
