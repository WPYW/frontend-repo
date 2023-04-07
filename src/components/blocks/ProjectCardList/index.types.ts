interface project {
  id: string;
  title: string;
  description: string;
  thumbnails: string[];
  hashtags: string[];
  views: number;
  likes: number;
  created: string;
}

export interface CardListProps {
  projects: project[];
}
