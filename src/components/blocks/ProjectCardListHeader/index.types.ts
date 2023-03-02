export interface IParams {
  ordering: string;
  search: string;
  page: number;
}

export interface ProjectCardListHeaderProps {
  ordering: string;
  setParams: (value: React.SetStateAction<IParams>) => void;
}
