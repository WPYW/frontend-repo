import React, { useState } from 'react';
import styled from 'styled-components';

import { IHashtagInput } from './index.types';

export function HashtagInput({ hashtagArr, setProjectUploadForm }: IHashtagInput) {
  const [hashtag, setHashtag] = useState('');

  // input onChange 핸들러
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elementName = event.target.name;
    const elementValue = event.target.value;

    if (elementName === 'hashtag') setHashtag(elementValue);
  };

  // 해시태그 추가
  const onAddHashtag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (hashtag === '') return;
    if (event.key === 'Enter') {
      setProjectUploadForm((prev) => ({ ...prev, hashtagArr: [...prev.hashtagArr, hashtag] }));
      setHashtag('');
    }
  };

  // 해시태그 제거
  const onRemoveHashtag = (index: number) => {
    const newHashtagArr = hashtagArr;
    newHashtagArr.splice(index, 1);
    setProjectUploadForm((prev) => ({ ...prev, hashtagArr: [...newHashtagArr] }));
  };

  return (
    <HashtagInputWrapper>
      {hashtagArr.map((item, index) => (
        <Hashtag key={index} onClick={() => onRemoveHashtag(index)}>
          {item}
        </Hashtag>
      ))}
      <Input
        name="hashtag"
        value={hashtag}
        onChange={onChangeHandler}
        onKeyUp={onAddHashtag}
        placeholder="태그를 입력하세요"
      />
    </HashtagInputWrapper>
  );
}

const HashtagInputWrapper = styled.div`
  border: 2px solid limegreen;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
`;

const Hashtag = styled.div`
  border: 2px solid limegreen;

  display: inline-flex;
  align-items: center;

  padding: 8px 8px 8px 8px;
`;

const Input = styled.input`
  border: 2px solid limegreen;

  border-radius: 8px;

  padding: 8px 8px 8px 8px;

  outline: none;

  background: transparent;

  font-size: var(--base-text-size-normal);
  color: var(--base-text-color);
`;
