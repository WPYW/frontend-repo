export interface IParams {
  ordering: string;
  search: string;
  page: number;
}
export interface IProjectListHeaderProps {
  ordering: string;
  setParams: (value: React.SetStateAction<IParams>) => void;
}

export interface techProps {
  toggleClicked: boolean;
}
