import React, { useState } from 'react';
import * as S from './index.styles';
import { IParams } from './index.types';

import { ScrollCatcher, SideBar } from '@/components/blocks';

import { LoadingDots } from '@/components/atoms';

import StudyCardList from '@/components/blocks/StudyCardList';
import { useGetStudyList } from './useGetStudyList';
import { StudyListHeader } from '@/components/blocks/StudyListHeader';

export default function StudyListPage() {
  const [params, setParams] = useState<IParams>({ ordering: 'created', search: '', page: 1 });

  const { studys, getNextPageDetector, isLoading } = useGetStudyList(params);

  fetch('/studys', { method: 'get' })
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <S.Wrapper>
      <S.ColumnLeft>
        <SideBar />
      </S.ColumnLeft>
      <S.ColumnRight>
        <StudyListHeader ordering={params.ordering} setParams={setParams} />
        {isLoading ? <LoadingDots /> : <StudyCardList studys={studys} />}
        <ScrollCatcher getNextPageDetector={getNextPageDetector} />
      </S.ColumnRight>
    </S.Wrapper>
  );
}
