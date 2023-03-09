import { InputHTMLAttributes } from 'react';

export interface HashtagInputProps extends InputHTMLAttributes<HTMLInputElement> {
  setHashtagInput: {
    hashtags: string[];
    addHashtag: (hashtag: string) => void;
    removeHashtag: (removedHashtags: string[]) => void;
  };
}
