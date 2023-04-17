export interface StudyData {
  id: string;
  password: string;
  studyHashtag: string[];
  studyTitle: string;
  studyDescription: string;
  contactInfo: string;
  views: number;
  studyMember: number;
  deadline: string;
  remote: boolean;
  created: string;
}

export interface CardListProps {
  studys: StudyData[];
}
