import React from 'react';
import * as S from './index.styles';
import { ScrollCatcherProps } from './index.types';

import { LoadingDots } from '@/components/atoms';

export function ScrollCatcher({ getNextPageDetector }: ScrollCatcherProps) {
  const {
    target,
    state: { isLoading, isFetching, isFetchingNextPage, hasNextPage },
  } = getNextPageDetector;
  return (
    <S.Wrapper ref={target}>
      {isFetchingNextPage || isLoading ? <LoadingDots /> : null}
      {!isFetching && !isFetchingNextPage && !hasNextPage && (
        <S.NoMoreProject>공유하고 싶은 프로젝트를 업로드 해주세요!</S.NoMoreProject>
      )}
    </S.Wrapper>
  );
}
