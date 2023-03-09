import { InputHTMLAttributes } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  setTextInput: {
    value: string;
    setValue: (value: string) => void;
  };
}
