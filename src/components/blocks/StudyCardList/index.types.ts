export interface StudyData {
  id: string;
  password: string;
  studyHashtag: string[];
  studyTitle: string;
  studyDescription: string;
  contactInfo: string;
  views: number;
  studyMember: number;
  startDate: string;
  endDate: string;
  deadline: string;
  remote: boolean;
}

export interface CardListProps {
  studys: StudyData[];
}
