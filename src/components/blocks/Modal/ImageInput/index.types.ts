import { InputHTMLAttributes } from 'react';

export interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  setImageInput: {
    images: File[];
    addImage: (images: File[]) => void;
    removeImage: (removedImages: File[]) => void;
  };
}
