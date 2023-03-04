import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface NavigationItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  clicked: boolean;
}
