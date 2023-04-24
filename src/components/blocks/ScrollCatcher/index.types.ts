export interface ScrollCatcherProps {
  getNextPageDetector: {
    target: React.MutableRefObject<null>;
    state: {
      isLoading: boolean;
      isFetching: boolean;
      isFetchingNextPage: boolean;
      hasNextPage: boolean | undefined;
    };
  };
}
