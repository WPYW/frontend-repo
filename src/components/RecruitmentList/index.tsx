import React, { useState } from 'react';
import styled from 'styled-components';

import { useRecruitList, useProjectListLoading } from '@/hooks';

import { RecruitmentListHeader } from './RecruitmentListHeader';
import { CardList } from './CardList';
import { ScrollCatcher } from './ScrollCatcher';

interface IParams {
  ordering: string;
  search: string;
  page: number;
}

export function RecruitmentList() {
  const [params, setParams] = useState<IParams>({ ordering: 'created', search: '', page: 1 });

  const recruitListHeaderProps = {
    onSetOrdering: (event: React.MouseEvent<HTMLButtonElement>) => {
      setParams((prev) => ({ ...prev, ordering: (event.target as HTMLElement).id }));
    },
    onSetSearch: (event: React.ChangeEvent<HTMLInputElement>) => {
      setParams((prev) => ({ ...prev, search: event.target.value }));
    },
  };

  const { recruitList, isLoading, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useRecruitList(params);

  const recruitCardListProps = {
    recruitList,
    isLoading,
  };

  const target = useProjectListLoading(isFetching, fetchNextPage);

  const scrollCatcherProps = {
    target,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
  };

  return (
    <RecruitListWrapper>
      <RecruitmentListHeader {...recruitListHeaderProps} />
      <CardList {...recruitCardListProps} />
      <ScrollCatcher {...scrollCatcherProps} />
    </RecruitListWrapper>
  );
}

const RecruitListWrapper = styled.article`
  padding: 30px;
`;
