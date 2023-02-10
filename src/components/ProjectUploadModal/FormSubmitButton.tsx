import React from 'react';
import styled from 'styled-components';

import { IProject, IFormSubmitButton } from './index.types';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

export function FormSubmitButton({ projectUploadForm }: IFormSubmitButton) {
  const onSubmitHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      projectUploadFormValidationCheck(projectUploadForm);
      console.log(await uploadProject(projectUploadForm));
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <ButtonWrapper>
      <Button type="button" onClick={onSubmitHandler}>
        업로드
      </Button>
    </ButtonWrapper>
  );
}

const uploadProject = async (projectUploadForm: IProject) => {
  await fetchEncodedReadme(projectUploadForm.projectLink); // 존재하는 리포지토리인지 확인
  return await sendProjectToServer(projectUploadForm); //올바른 리포지토리 링크이면 프로젝트 업로드
};

const fetchEncodedReadme = async (projectLink: string) => {
  const [repoOwner, repoName] = projectLink.replace('https://github.com/', '').split('/');

  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/readme`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status !== 200) throw new Error(`리드미 fetch 에러 발생 코드 : ${response.status}`);
};

const sendProjectToServer = async (project: IProject) => {
  const response = await (
    await fetch('/project', {
      method: 'POST',
      body: JSON.stringify({ project: { ...project } }),
    })
  )
    .json()
    .catch(() => {
      throw new Error(`POST 에러 : Project 프로젝트 서버(${response.status})`);
    });

  return JSON.parse(response);
};

// 유효성 검사 함수
const projectUploadFormValidationCheck = (projectUploadForm: IProject) => {
  if (projectUploadForm.projectTitle === '') throw new Error('프로젝트 제목을 입력해주세요');
  if (projectUploadForm.projectDescription === '') throw Error('프로젝트 설명을 입력해주세요');
  if (projectUploadForm.projectLink === '') throw Error('깃허브 리포지토리을 입력해주세요');
  if (projectUploadForm.thumbnailList.length === 0) throw Error('섬네일 이미지를 업로드해주세요');
};

const ButtonWrapper = styled.div``;

const Button = styled.button`
  font-size: var(--base-text-size-normal);

  background-color: var(--project-upload-modal-submit-button-background-color);
  color: var(--project-upload-modal-submit-button-text-color);

  border: 2px solid;
  border-color: var(--project-upload-modal-submit-button-border-color);

  padding: 8px 32px 8px 32px;

  border-radius: 8px;

  cursor: pointer;
`;
