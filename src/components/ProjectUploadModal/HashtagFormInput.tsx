import React, { useState } from 'react';
import styled from 'styled-components';

interface IProjectUploadForm {
  projectTitle: string;
  projectDescription: string;
  githubLink: string;
  demositeLink: string;
  projectHashtag: string[];
  previewImages: File[];
}

export interface IHashtagFormInput {
  label: string;
  projectHashtag: string[];
  required?: boolean;
  setProjectUploadForm: React.Dispatch<React.SetStateAction<IProjectUploadForm>>;
}

export function HashtagFormInput({
  projectHashtag,
  setProjectUploadForm,
  ...props
}: IHashtagFormInput) {
  const [hashtag, setHashtag] = useState('');

  // input onChange 핸들러
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (projectHashtag.length >= 10) return;

    const elementName = event.target.name;
    const elementValue = event.target.value;

    if (elementValue.includes(' ')) return;
    if (elementName === 'hashtag') setHashtag(elementValue);
  };

  // 해시태그 추가
  const onAddHashtag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (hashtag === '') return;
    if (event.key === 'Enter') {
      setProjectUploadForm((prev) => ({
        ...prev,
        projectHashtag: [...prev.projectHashtag, hashtag],
      }));
      setHashtag('');
    }
    if (event.code === 'Space') {
      setProjectUploadForm((prev) => ({
        ...prev,
        projectHashtag: [...prev.projectHashtag, hashtag],
      }));
      setHashtag('');
    }
  };

  // 해시태그 제거
  const onRemoveHashtag = (index: number) => {
    const newHashtagList = projectHashtag;
    newHashtagList.splice(index, 1);
    setProjectUploadForm((prev) => ({ ...prev, projectHashtag: [...newHashtagList] }));
  };

  return (
    <HashTagFormInputWrapper>
      <LabelWrapper>
        <Required required={props.required}>*</Required>
        <Label>{props.label}</Label>
      </LabelWrapper>
      <HashtagsWrapper>
        {projectHashtag?.map((item, index) => (
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
          spellCheck={false}
          autoComplete="false"
          maxLength={15}
          {...props}
        />
      </HashtagsWrapper>
    </HashTagFormInputWrapper>
  );
}

const HashTagFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &::after {
    content: '';

    height: 2px;

    background-color: var(--project-upload-modal-input-underline-color);
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

const Required = styled.div<{ required: boolean | undefined }>`
  color: var(--project-upload-modal-input-required-color);

  visibility: ${(props) => (!props.required ? 'hidden' : '')};
`;

const Label = styled.div`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-small);
  color: var(--project-upload-modal-input-label-text-color);
`;

const HashtagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  padding: 12px 8px 6px 8px;
`;

const Hashtag = styled.div`
  font-size: var(--base-text-size-small);
  font-weight: var(--base-text-weight-normal);
  color: var(--project-upload-modal-hashtag-text-color);

  padding: 8px 12px;

  border-radius: 8px;

  background-color: var(--project-upload-modal-hashtag-background-color);

  cursor: pointer;
`;

const Input = styled.input`
  all: unset;

  font-size: var(--base-text-size-normal);
  color: var(--project-upload-modal-input-text-color);

  padding-top: 6px;
`;
