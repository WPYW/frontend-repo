import React, { useState } from 'react';
import * as S from './index.styles';
import { IParams } from './index.types';

import {
  MainPageDescription,
  ProjectCardList,
  ProjectCardListHeader,
  ScrollCatcher,
} from '@/components/blocks';
import { useGetProjectList } from './useGetProjectList';
import { LoadingDots } from '@/components';

export default function MainPage() {
  const [params, setParams] = useState<IParams>({ ordering: 'created', search: '', page: 1 });

  const { projects, getNextPageDetector, isLoading } = useGetProjectList(params);

  return (
    <S.Wrapper>
      <S.ColumnLeft>
        <MainPageDescription />
      </S.ColumnLeft>
      <S.ColumnRight>
        <ProjectCardListHeader ordering={params.ordering} setParams={setParams} />
        {isLoading ? <LoadingDots /> : <ProjectCardList projects={projects} />}
        <ScrollCatcher getNextPageDetector={getNextPageDetector} />
      </S.ColumnRight>
    </S.Wrapper>
  );
}
