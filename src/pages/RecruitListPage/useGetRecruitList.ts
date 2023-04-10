import { useInfiniteQuery } from '@tanstack/react-query';
import { IParams } from './index.types';

import { BACKEND_API_URL } from '@/common/url';
import { useRef, useEffect } from 'react';

export function useGetRecruitList(params: IParams) {
  // useEffect(() => {
  //     fetch(`${BACKEND_API_URL}/recruit`, { method: 'get' })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setRecruitmentList(data.results);
  //       });
  //   }, []);
  const { data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['recruitList', params],
      queryFn: ({
        pageParam = `${BACKEND_API_URL}/recruits/?ordering=-${params.ordering}&search=${params.search}&page=${params.page}`,
      }) => {
        return fetch(pageParam)
          .then((res) => res.json())
          .then((res) => {
            const { results, next } = res;
            return { results, next };
          });
      },

      getNextPageParam: (lastPage) => {
        return lastPage.next === null ? undefined : lastPage.next;
      },
    });

  // 최적화 필요
  const recruits = [];
  if (data !== undefined) {
    for (const page of data.pages) {
      recruits.push(...page.results);
    }
  }

  const target = useRef(null);

  const getNextPageDetector = {
    target: target,
    state: {
      isFetching: isFetching,
      isFetchingNextPage: isFetchingNextPage,
      hasNextPage: hasNextPage,
    },
  };

  useEffect(() => {
    const options = {
      threshold: [0, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    }, options);

    if (target.current !== null) {
      observer.observe(target.current);
    }
  }, [isFetching]);

  return { recruits, getNextPageDetector, isLoading };
}
