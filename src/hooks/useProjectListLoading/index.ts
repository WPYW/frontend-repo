import { FetchNextPageOptions, InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useRef, useEffect } from 'react';

export function useProjectListLoading(
  isFetching: boolean,
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<
    InfiniteQueryObserverResult<
      {
        results: any;
        next: any;
      },
      unknown
    >
  >,
) {
  const target = useRef(null);

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

  return target;
}
