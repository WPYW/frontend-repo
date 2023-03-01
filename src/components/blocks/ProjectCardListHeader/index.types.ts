export interface IParams {
  ordering: string;
  search: string;
  page: number;
}

export interface ProjectCardListHeaderProps {
  setParams: (value: React.SetStateAction<IParams>) => void;
}
