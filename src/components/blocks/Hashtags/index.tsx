import { Hashtag } from '@/components/atoms';
import React from 'react';
import * as S from './index.styles';
import { HashtagsProps } from './index.types';

export function Hashtags({ hashtags }: HashtagsProps) {
  return (
    <S.Wrapper>
      {hashtags.map((hashtag, index) => (
        <Hashtag key={index}>{hashtag}</Hashtag>
      ))}
    </S.Wrapper>
  );
}
