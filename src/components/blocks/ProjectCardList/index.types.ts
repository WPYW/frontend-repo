interface project {
  projectTitle: string;
  projectDescription: string;
  previewImages: string[];
  projectHashtag: string[];
  views: number;
  likes: number;
  created: string;
}

export interface CardListProps {
  projects: project[];
}
