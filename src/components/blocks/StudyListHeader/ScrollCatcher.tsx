import React from 'react';

import styled from 'styled-components';

import { LoadingDots } from '../../LoadingDots';

interface IScrollCatcher {
  target: React.MutableRefObject<null>;
  isFetching: boolean;
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
}

export function ScrollCatcher({
  target,
  isFetching,
  hasNextPage,
  isFetchingNextPage,
}: IScrollCatcher) {
  return (
    <ScrollCatcherWrapper ref={target}>
      {isFetchingNextPage ? <LoadingDots /> : null}
      {!isFetching && !hasNextPage ? (
        <NoMoreProject>진행하고 싶은 내용을 업로드 해주세요!</NoMoreProject>
      ) : null}
    </ScrollCatcherWrapper>
  );
}

const ScrollCatcherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
  margin-top: 100px;
`;

const NoMoreProject = styled.div``;
