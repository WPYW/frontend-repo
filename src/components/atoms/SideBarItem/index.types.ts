import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface SideBarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  clicked?: boolean;
}
