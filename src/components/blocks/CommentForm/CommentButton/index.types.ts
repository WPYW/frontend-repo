import { ButtonHTMLAttributes, ReactNode } from 'react';
export interface CommentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
