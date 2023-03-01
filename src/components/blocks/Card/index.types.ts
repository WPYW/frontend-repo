import { HTMLAttributes } from 'react';

export interface CardProps {
  project: {
    projectTitle: string;
    projectDescription: string;
    previewImages: string[];
    projectHashtag: string[];
    views: number;
    likes: number;
    created: string;
  };
}

export interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  overlay: boolean;
}
