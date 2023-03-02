export interface ScrollCatcherProps {
  getNextPageDetector: {
    target: React.MutableRefObject<null>;
    state: {
      isFetching: boolean;
      isFetchingNextPage: boolean;
      hasNextPage: boolean | undefined;
    };
  };
}
