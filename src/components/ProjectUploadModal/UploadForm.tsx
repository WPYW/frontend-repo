import React from 'react';
import styled from 'styled-components';

import { IProjectUploadForm } from './index.types';

import { FormInput } from './FormInput';
import { HashtagInput } from './HashtagInput';

export function UploadForm({ projectUploadForm, setProjectUploadForm }: IProjectUploadForm) {
  const { projectTitle, projectDescription, projectLink, demoSiteLink, hashtagArr } =
    projectUploadForm;

  // input onChange 핸들러
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elementName = event.target.name;
    const elementValue = event.target.value;

    setProjectUploadForm((prev) => ({ ...prev, [elementName]: elementValue }));
  };

  return (
    <FormWrapper>
      <FormInput
        label="프로젝트 제목"
        name="projectTitle"
        value={projectTitle}
        onChange={onChangeHandler}
        placeholder="프로젝트 제목을 입력해주세요"
      />
      <FormInput
        label="프로젝트 설명"
        name="projectDescription"
        value={projectDescription}
        onChange={onChangeHandler}
        placeholder="프로젝트 설명을 입력해주세요"
        maxLength={50}
      />
      <FormInput
        label="프로젝트 링크"
        name="projectLink"
        value={projectLink}
        onChange={onChangeHandler}
        placeholder="https://github.com/repoOwner/repoName"
        maxLength={50}
      />
      <FormInput
        label="데모사이트 링크"
        name="demoSiteLink"
        value={demoSiteLink}
        onChange={onChangeHandler}
        placeholder="데모사이트 링크를 입력해주세요"
      />
      <HashtagInput hashtagArr={hashtagArr} setProjectUploadForm={setProjectUploadForm} />
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;

  padding: 16px;
`;
