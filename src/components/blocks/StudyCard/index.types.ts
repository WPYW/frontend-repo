import { HTMLAttributes, AnchorHTMLAttributes } from 'react';

export interface CardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  studys: {
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
  };
}

export interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  overlay: boolean;
}
