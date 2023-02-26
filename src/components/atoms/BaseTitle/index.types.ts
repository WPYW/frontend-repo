import { HTMLAttributes, ReactNode } from 'react';
export interface BaseTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}
