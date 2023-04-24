import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
