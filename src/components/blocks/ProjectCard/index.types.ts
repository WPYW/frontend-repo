import { HTMLAttributes, AnchorHTMLAttributes } from 'react';

export interface CardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  project: {
    id: string;
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
