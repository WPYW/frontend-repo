import { HTMLAttributes } from 'react';

export interface DarkModeToggleProps extends HTMLAttributes<HTMLDivElement> {
  mode: string;
  onClick: () => void;
}
