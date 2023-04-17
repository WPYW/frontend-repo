export interface RecruitData {
  id: string;
  password: string;
  created: string;
  title: string;
  description: string;
  contactInfo: string;
  recruitHashtag: string[];
  views: number;
  recruitMember: number;
  deadline: string;
  shut: boolean;
  remote: boolean;
}

export interface CardListProps {
  recruits: RecruitData[];
}
