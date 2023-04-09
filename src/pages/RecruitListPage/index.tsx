import React, { useState, useEffect } from 'react';
import * as S from './index.styles';
import { IParams } from './index.types';

import { ScrollCatcher, SideBar } from '@/components/blocks';

import { LoadingDots } from '@/components/atoms';

import { useGetRecruitList } from './useGetRecruitList';
import { RecruitmentListHeader } from '@/components/blocks/RecruitMentListHeader';
import RecruitCardList from '@/components/blocks/RecruitmentCardList';

export default function RecruitListPage() {
  const [params, setParams] = useState<IParams>({ ordering: 'created', search: '', page: 1 });

  const { recruits, getNextPageDetector, isLoading } = useGetRecruitList(params);
  console.log(recruits);
  return (
    <S.Wrapper>
      <S.ColumnLeft>
        <SideBar />
      </S.ColumnLeft>
      <S.ColumnRight>
        <RecruitmentListHeader ordering={params.ordering} setParams={setParams} />
        {isLoading ? <LoadingDots /> : <RecruitCardList recruits={recruits} />}
        <ScrollCatcher getNextPageDetector={getNextPageDetector} />
      </S.ColumnRight>
    </S.Wrapper>
  );
}
