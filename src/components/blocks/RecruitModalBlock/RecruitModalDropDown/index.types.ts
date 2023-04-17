import { ButtonHTMLAttributes } from 'react';

export interface RecruitModalDropDownProps {
  placeholder: string;
  options: string[];
  description: string;
  setDropdownInput: {
    value: string;
    setValue: (value: string) => void;
  };
}

export interface DropdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}
