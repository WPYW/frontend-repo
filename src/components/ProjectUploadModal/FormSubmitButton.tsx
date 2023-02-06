import React from 'react';
import styled from 'styled-components';

import { IProject } from './index.types';

export const FormSubmitButton = ({ projectUploadForm }: ProjectUploadFormButtonProps) => {
  const onSubmitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      projectUploadFormValidationCheck(projectUploadForm);
      uploadProject(projectUploadForm);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SubmitButtonWrapper>
      <SubmitButton type="button" onClick={onSubmitHandler}>
        업로드
      </SubmitButton>
    </SubmitButtonWrapper>
  );
};

const uploadProject = (projectUploadForm: IProject) => {
  fetchEncodedReadme(projectUploadForm.projectLink)
    .then((encodedReadme) => encodedReadme && sendProjectToServer(projectUploadForm)) // 올바른 리포지토리 링크이면 프로젝트 업로드
    .catch((err) => {
      throw err;
    });
};

const fetchEncodedReadme = (projectLink: string) => {
  const [repoOwner, repoName] = projectLink.replace('https://github.com/', '').split('/');

  return fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/readme`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  })
    .then((res) => {
      if (res.status === 200) return res.json();
      throw new Error(`리드미 패칭 에러 발생 코드 : ${res.status}`);
    })
    .then((res) => res.content)
    .catch((err) => {
      throw err;
    });
};

const sendProjectToServer = (project: IProject) => {
  return fetch('/project', {
    method: 'POST',
    body: JSON.stringify({ project: { ...project } }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(JSON.parse(res));
    })
    .catch((err) => {
      throw err;
    });
};

// 유효성 검사 함수
function projectUploadFormValidationCheck(projectUploadForm: IProject) {
  if (projectUploadForm.projectTitle === '') throw new Error('프로젝트 제목을 입력해주세요');
  if (projectUploadForm.projectDescription === '') throw Error('프로젝트 설명을 입력해주세요');
  if (projectUploadForm.projectLink === '') throw Error('깃허브 리포지토리을 입력해주세요');
}

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

interface ProjectUploadFormButtonProps {
  projectUploadForm: IProject;
}

const SubmitButtonWrapper = styled.div`
  border: 2px solid limegreen;
`;

const SubmitButton = styled.button`
  border: 2px solid limegreen;

  font-size: var(--base-text-size-large);

  background-color: var(--toss-main-color-blue-2);

  padding: 8px 16px 8px 16px;

  border-radius: 8px;
`;
