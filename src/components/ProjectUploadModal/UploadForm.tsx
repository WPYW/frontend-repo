import React from 'react';
import styled from 'styled-components';

import { IProjectUploadForm } from './index.types';

import { FormInput } from './FormInput';
import { HashtagFormInput } from './HashtagFormInput';
import { ImageFormInput } from './ImageFormInput';

export function UploadForm({ projectUploadForm, setProjectUploadForm }: IProjectUploadForm) {
  const {
    projectTitle,
    projectDescription,
    projectLink,
    demoSiteLink,
    hashtagList,
    thumbnailList,
  } = projectUploadForm;

  // input onChange 핸들러
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        onChange={onChangeHandler}
        placeholder="예시 - WhatProjectYouWant"
        required
      />
      <FormInput
        label="프로젝트 간단 소개"
        name="projectDescription"
        value={projectDescription}
        onChange={onChangeHandler}
        placeholder="예시 - IT 프로젝트 공유 사이트"
        maxLength={50}
        required
      />
      <FormInput
        label="프로젝트 깃허브 링크"
        name="projectLink"
        value={projectLink}
        onChange={onChangeHandler}
        placeholder="예시 - https://github.com/repoOwner/repoName"
        maxLength={50}
        required
      />
      <FormInput
        label="데모사이트 링크"
        name="demoSiteLink"
        value={demoSiteLink}
        onChange={onChangeHandler}
        placeholder="예시 - https://wpyw.io"
      />
      <HashtagFormInput
        label="해시태크 (최대 10개)"
        hashtagList={hashtagList}
        setProjectUploadForm={setProjectUploadForm}
      />
      <ImageFormInput
        label="Thumbnail 이미지 (최대 3개)"
        thumbnailList={thumbnailList}
        setProjectUploadForm={setProjectUploadForm}
        required
      />
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;

  width: 100%;
`;
