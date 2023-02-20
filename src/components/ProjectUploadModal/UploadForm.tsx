import React from 'react';
import styled from 'styled-components';

import { FormInput } from './FormInput';
import { HashtagFormInput } from './HashtagFormInput';
import { ImageFormInput } from './ImageFormInput';

interface IProjectUploadForm {
  projectTitle: string;
  projectDescription: string;
  githubLink: string;
  demositeLink: string;
  projectHashtag: string[];
  previewImages: File[];
}

interface IUploadForm {
  projectUploadForm: IProjectUploadForm;
  setProjectUploadForm: React.Dispatch<React.SetStateAction<IProjectUploadForm>>;
}

export function UploadForm({ projectUploadForm, setProjectUploadForm }: IUploadForm) {
  const {
    projectTitle,
    projectDescription,
    githubLink,
    demositeLink,
    projectHashtag,
    previewImages,
  } = projectUploadForm;

  // FormInput onChange 핸들러
  const onFormInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elementName = event.target.name;
    const elementValue = event.target.value;

    setProjectUploadForm((prev) => ({ ...prev, [elementName]: elementValue }));
  };

  return (
    <FormWrapper>
      <FormInput
        label="프로젝트명"
        name="projectTitle"
        value={projectTitle}
        onChange={onFormInputChangeHandler}
        placeholder="예시 - WhatProjectYouWant"
        required
      />
      <FormInput
        label="프로젝트 간단 소개"
        name="projectDescription"
        value={projectDescription}
        onChange={onFormInputChangeHandler}
        placeholder="예시 - IT 프로젝트 공유 사이트"
        maxLength={50}
        required
      />
      <FormInput
        label="프로젝트 깃허브 링크"
        name="githubLink"
        value={githubLink}
        onChange={onFormInputChangeHandler}
        placeholder="예시 - https://github.com/repoOwner/repoName"
        maxLength={50}
        required
      />
      <FormInput
        label="데모사이트 링크"
        name="demositeLink"
        value={demositeLink}
        onChange={onFormInputChangeHandler}
        placeholder="예시 - https://wpyw.io"
      />
      <HashtagFormInput
        label="해시태크 (최대 10개)"
        projectHashtag={projectHashtag}
        setProjectUploadForm={setProjectUploadForm}
      />
      <ImageFormInput
        label="Thumbnail 이미지 (최대 3개)"
        previewImages={previewImages}
        setProjectUploadForm={setProjectUploadForm}
        required
      />
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 100%;
`;
