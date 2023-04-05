import React, { useState } from 'react';
import * as S from './index.styles';

import { Card } from './Card';
import { CardListHeader } from './CardListHeader';
import { useGetProjectList } from './useGetProjectList';
import { ScrollCatcher } from '@/components/blocks';
import { LoadingDots } from '@/components/atoms';
import { IParams } from './index.types';

export function CardList() {
  const [params, setParams] = useState<IParams>({ ordering: 'created', search: '', page: 1 });

  const { projects, getNextPageDetector, isLoading } = useGetProjectList(params);

  return (
    <>
      <CardListHeader ordering={params.ordering} setParams={setParams} />
      <S.Wrapper>
        {isLoading ? (
          <LoadingDots />
        ) : (
          projects.map((project, index) => <Card key={index} project={project} />)
        )}
      </S.Wrapper>
      <ScrollCatcher getNextPageDetector={getNextPageDetector} />
    </>
  );
}
