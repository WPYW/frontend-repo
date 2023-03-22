import { ButtonHTMLAttributes } from 'react';

export interface RecruitModalDropDownProps {
  placeholder: string;
  options: string[];
}

export interface DropdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}
