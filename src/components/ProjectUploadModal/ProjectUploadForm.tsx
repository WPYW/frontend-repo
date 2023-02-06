import React, { useState } from 'react';
import styled from 'styled-components';

import { IProject } from './index.types';

interface ProjectUploadFormProps {
  projectUploadForm: IProject;
  setProjectUploadForm: React.Dispatch<React.SetStateAction<IProject>>;
}

export const ProjectUploadForm = ({
  projectUploadForm,
  setProjectUploadForm,
}: ProjectUploadFormProps) => {
  const [hashtag, setHashtag] = useState('');

  const { projectTitle, projectDescription, projectLink, demoSiteLink, hashtagArr } =
    projectUploadForm;

  // input onChange 핸들러
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elementName = event.target.name;
    const elementValue = event.target.value;

    if (elementName === 'hashtag') setHashtag(elementValue);
    setProjectUploadForm((prev) => ({ ...prev, [elementName]: elementValue }));
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
    <FormWrapper>
      <FormInputWrapper>
        <FormInputLabel>프로젝트 제목</FormInputLabel>
        <FormInput
          name="projectTitle"
          value={projectTitle}
          onChange={onChangeHandler}
          placeholder="프로젝트 제목을 입력해주세요"
        />
      </FormInputWrapper>
      <FormInputWrapper>
        <FormInputLabel>프로젝트 설명</FormInputLabel>
        <FormInput
          name="projectDescription"
          value={projectDescription}
          onChange={onChangeHandler}
          maxLength={50}
          placeholder="프로젝트 설명을 입력해주세요"
        />
      </FormInputWrapper>
      <FormInputWrapper>
        <FormInputLabel>프로젝트 링크</FormInputLabel>
        <FormInput
          name="projectLink"
          value={projectLink}
          onChange={onChangeHandler}
          placeholder="https://github.com/repoOwner/repoName"
        />
      </FormInputWrapper>
      <FormInputWrapper>
        <FormInputLabel>데모사이트 링크</FormInputLabel>
        <FormInput
          name="demoSiteLink"
          value={demoSiteLink}
          onChange={onChangeHandler}
          placeholder="데모사이트 링크를 입력해주세요"
        />
      </FormInputWrapper>
      <FormInputWrapper>
        <HashtagItemsWrapper>
          {hashtagArr.map((item, index) => (
            <HashTagItem key={index} onClick={() => onRemoveHashtag(index)}>
              {item}
            </HashTagItem>
          ))}
          <FormInput
            name="hashtag"
            value={hashtag}
            onChange={onChangeHandler}
            onKeyUp={onAddHashtag}
            placeholder="태그를 입력하세요"
          />
        </HashtagItemsWrapper>
      </FormInputWrapper>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;

  padding: 16px;
`;

const FormInputWrapper = styled.div`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FormInputLabel = styled.label`
  border: 2px solid limegreen;

  font-size: var(--base-text-size-small);
`;

const FormInput = styled.input`
  border: 2px solid limegreen;

  border-radius: 8px;

  padding: 8px 8px 8px 8px;

  outline: none;

  background: transparent;

  font-size: var(--base-text-size-normal);
  color: var(--base-text-color);
`;

const HashtagItemsWrapper = styled.div`
  border: 2px solid limegreen;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

const HashTagItem = styled.div`
  border: 2px solid limegreen;

  display: inline-flex;
  align-items: center;

  padding: 8px 8px 8px 8px;
`;
