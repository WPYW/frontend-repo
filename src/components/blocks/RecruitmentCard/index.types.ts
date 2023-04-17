import { HTMLAttributes, AnchorHTMLAttributes } from 'react';

export interface CardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  recruits: {
    id: string;
    password: string;
    created: string;
    title: string;
    description: string;
    recruitHashtag: string[];
    contactInfo: string;
    views: number;
    recruitMember: number;
    shut: boolean;
    deadline: string;
  };
}

export interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  overlay: boolean;
}
