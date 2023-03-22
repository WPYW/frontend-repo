import { InputHTMLAttributes } from 'react';

export interface RecruitTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  setTextInput: {
    value: string;
    setValue: (value: string) => void;
  };
}
