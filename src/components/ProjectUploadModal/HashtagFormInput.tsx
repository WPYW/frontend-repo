import React, { useState } from 'react';
import styled from 'styled-components';

import { IHashtagInput } from './index.types';

export function HashtagFormInput({ hashtagArr, setProjectUploadForm, ...props }: IHashtagInput) {
  const [hashtag, setHashtag] = useState('');

  // input onChange 핸들러
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (hashtagArr.length >= 10) return;

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
    <HashTagFormInputContainer>
      <LabelWrapper>
        <Required required={props.required}>*</Required>
        <Label>{props.label}</Label>
      </LabelWrapper>
      <HashtagFormInputWrapper>
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
      </HashtagFormInputWrapper>
    </HashTagFormInputContainer>
  );
}

const HashTagFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    display: block;

    width: 100%;
    height: 2px;

    background-color: var(--project-upload-modal-input-underline-color);
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  gap: 2px;

  color: var(--project-upload-modal-input-required-color);
`;

const Required = styled.div<{ required: boolean | undefined }>`
  visibility: ${(props) => (!props.required ? 'hidden' : '')};
`;

const Label = styled.div`
  font-size: var(--base-text-size-small);
  font-weight: var(--base-text-weight-medium);
  color: var(--base-text-color);
`;

const HashtagFormInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
`;

const Hashtag = styled.div`
  font-size: var(--base-text-size-small);
  font-weight: var(--base-text-weight-normal);
  color: var(--project-upload-modal-hashtag-text-color);

  padding: 8px 8px 8px 8px;

  margin-bottom: 2px;

  background-color: var(--project-upload-modal-hashtag-background-color);

  border-radius: 8px;

  cursor: pointer;
`;

const Input = styled.input`
  font-size: var(--base-text-size-small);
  color: var(--base-text-color);

  padding: 8px 8px 8px 8px;

  border: none;

  outline: none;
`;
