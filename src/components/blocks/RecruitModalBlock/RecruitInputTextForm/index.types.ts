export type TextAlign = 'left' | 'center' | 'right';
export type FontWeight = 'normal' | 'bold';

export interface DescriptionInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: 'normal' | 'bold';
}

export interface ButtonProps {
  active?: boolean;
  fontWeight?: FontWeight;
  textAlign?: TextAlign;
}
