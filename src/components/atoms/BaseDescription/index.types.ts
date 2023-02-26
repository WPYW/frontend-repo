import { HTMLAttributes, ReactNode } from 'react';
export interface BaseDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  type?: string;
}
