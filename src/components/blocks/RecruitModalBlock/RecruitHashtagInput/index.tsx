import React, { useState } from 'react';
import * as S from './index.styles';
import { HashtagInputProps } from './index.types';
import { RecruitHashtag } from '../../../atoms/RecruitHashtag';

export function RecruitHashtagInput({ setHashtagInput, ...rest }: HashtagInputProps) {
  const [hashtag, setHashtag] = useState('');

  const { hashtags, addHashtag, removeHashtag } = setHashtagInput;

  // 해시태그 추가
  const addHashtagHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (hashtag === '') return;
    if (event.key === 'Enter') {
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
        <RecruitHashtag key={index} onClick={() => removeHashtagHandler(index)}>
          {hashtag}
        </RecruitHashtag>
      ))}
      <S.Input
        value={hashtag}
        onChange={(event) => setHashtag(event.target.value)}
        onKeyUp={addHashtagHandler}
        {...rest}
      />
    </S.Wrapper>
  );
}
