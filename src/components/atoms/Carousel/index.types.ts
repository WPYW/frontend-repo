import { ButtonHTMLAttributes } from 'react';
export interface CarouselProps {
  imgUrlList: string[];
}

export interface CarouselButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: string;
}
