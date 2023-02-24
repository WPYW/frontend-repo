import { useInfiniteQuery } from '@tanstack/react-query';

import { BACKEND_API_URL } from '@/common/url';

interface IParams {
  ordering: string;
  search: string;
  page: number;
}

export function useProjectList(params: IParams) {
  const { data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['projectList', params],
      queryFn: ({
        pageParam = `${BACKEND_API_URL}/projects/?ordering=-${params.ordering}&search=${params.search}&page=${params.page}/`,
      }) => {
        return fetch(pageParam)
          .then((res) => res.json())
          .then((res) => {
            const { results, next } = res;
            return { results, next };
          });
      },

      getNextPageParam: (lastPage) => {
        return lastPage.next === null ? undefined : lastPage.next.replace('http://localhost', '');
      },
    });

  // 최적화 필요
  const projectList = [];
  if (data !== undefined) {
    for (const page of data.pages) {
      projectList.push(...page.results);
    }
  }

  return { projectList, isLoading, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage };
}
