import React, { useState } from 'react';
import * as S from './index.styles';
import { HashtagInputProps } from './index.types';
import { Hashtag } from '../../../atoms/Hashtag';

export function HashtagInput({ setHashtagInput, ...rest }: HashtagInputProps) {
  const [hashtag, setHashtag] = useState('');

  const { hashtags, addHashtag, removeHashtag } = setHashtagInput;

  // 해시태그 추가
  const addHashtagHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (hashtag === '') return;
    if (event.key === 'Enter') {
      event.preventDefault();
      addHashtag(hashtag);
      setHashtag('');
    }
    if (event.code === 'Space') {
      addHashtag(hashtag);
      setHashtag('');
    }
  };

  // 해시태그 제거
  const removeHashtagHandler = (index: number) => {
    const newHashtagList = hashtags;
    newHashtagList.splice(index, 1);
    removeHashtag(newHashtagList);
  };

  return (
    <S.Wrapper>
      {hashtags.map((hashtag, index) => (
        <Hashtag key={index} onClick={() => removeHashtagHandler(index)}>
          {hashtag}
        </Hashtag>
      ))}
      <S.Input
        value={hashtag}
        onChange={(event) => {
          if (event.target.value === ' ') return;
          setHashtag(event.target.value);
        }}
        onKeyDown={addHashtagHandler}
        {...rest}
      />
    </S.Wrapper>
  );
}
