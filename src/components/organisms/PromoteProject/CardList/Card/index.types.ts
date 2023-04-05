import { HTMLAttributes } from 'react';

export interface CardProps {
  project: {
    id: string;
    title: string;
    description: string;
    thumbnails: string[];
    hashtags: string[];
    views: number;
    likes: number;
    created: string;
  };
}

export interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  overlay: boolean;
}
