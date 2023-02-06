import React, { useState } from 'react';
import styled from 'styled-components';

import { IProject } from './index.types';
import { ProjectUploadFormButton } from './ProjectUploadFormButton';

export const ProjectUploadForm = () => {
  const [projectUploadForm, setProjectUploadForm] = useState<IProject>({
    projectTitle: '',
    projectDescription: '',
    projectLink: '',
    demoSiteLink: '',
    hashtagArr: [],
  });

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
      <FormInputContainer>
        <Label>프로젝트 제목</Label>
        <Input name="projectTitle" value={projectTitle} onChange={onChangeHandler} required />
      </FormInputContainer>
      <FormInputContainer>
        <Label>프로젝트 설명</Label>
        <Input
          name="projectDescription"
          value={projectDescription}
          onChange={onChangeHandler}
          required
          maxLength={50}
        />
      </FormInputContainer>
      <FormInputContainer>
        <Label>프로젝트 링크</Label>
        <Input
          name="projectLink"
          value={projectLink}
          onChange={onChangeHandler}
          required
          placeholder="https://github.com/repoOwner/repoName"
        />
      </FormInputContainer>
      <FormInputContainer>
        <Label>데모사이트 링크</Label>
        <Input name="demoSiteLink" value={demoSiteLink} onChange={onChangeHandler} />
      </FormInputContainer>
      <FormInputContainer>
        <Label>해시태그 </Label>
        <Input name="hashtag" value={hashtag} onChange={onChangeHandler} onKeyUp={onAddHashtag} />
      </FormInputContainer>
      <HashtagItemsWrapper>
        {hashtagArr.map((item, index) => (
          <HashTagItem key={index} onClick={() => onRemoveHashtag(index)}>
            {item}
          </HashTagItem>
        ))}
      </HashtagItemsWrapper>
      <ProjectUploadFormButton projectUploadForm={projectUploadForm} />
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  border: 2px solid limegreen;
`;

const FormInputContainer = styled.div`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  border: 2px solid limegreen;
`;

const Input = styled.input`
  border: 2px solid limegreen;
`;

const HashtagItemsWrapper = styled.div`
  border: 2px solid limegreen;
`;

const HashTagItem = styled.span`
  border: 2px solid limegreen;
`;
