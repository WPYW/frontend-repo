import { TextareaHTMLAttributes } from 'react';
export interface CommentInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
