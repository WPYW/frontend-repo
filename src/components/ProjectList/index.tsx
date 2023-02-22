import React, { useState } from 'react';
import styled from 'styled-components';

import { useProjectList, useProjectListLoading } from '@/hooks';

import { ProjectListHeader } from './ProjectListHeader';
import { CardList } from './CardList';
import { ScrollCatcher } from './ScrollCatcher';

interface IParams {
  ordering: string;
  search: string;
  page: number;
}

export function ProjectList() {
  const [params, setParams] = useState<IParams>({ ordering: 'created', search: '', page: 1 });

  const projectListHeaderProps = {
    onSetOrdering: (event: React.MouseEvent<HTMLButtonElement>) => {
      setParams((prev) => ({ ...prev, ordering: (event.target as HTMLElement).id }));
    },
    onSetSearch: (event: React.ChangeEvent<HTMLInputElement>) => {
      setParams((prev) => ({ ...prev, search: event.target.value }));
    },
  };

  const { projectList, isLoading, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useProjectList(params);

  const projectCardListProps = {
    projectList,
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
    <ProjectListWrapper>
      <ProjectListHeader {...projectListHeaderProps} />
      <CardList {...projectCardListProps} />
      <ScrollCatcher {...scrollCatcherProps} />
    </ProjectListWrapper>
  );
}

const ProjectListWrapper = styled.article`
  padding: 30px;
`;
