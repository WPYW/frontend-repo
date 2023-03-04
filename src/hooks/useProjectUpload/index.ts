import { useState } from 'react';

import { GITHUB_TOKEN } from '@/common/token';
import { BACKEND_API_URL } from '@/common/url';

interface IProjectUploadForm {
  projectTitle: string;
  projectDescription: string;
  githubLink: string;
  demositeLink: string;
  projectHashtag: string[];
  previewImages: File[];
}

export function useProjectUpload() {
  const [projectUploadForm, setProjectUploadForm] = useState<IProjectUploadForm>({
    projectTitle: '',
    projectDescription: '',
    githubLink: '',
    demositeLink: '',
    projectHashtag: [],
    previewImages: [],
  });

  return { projectUploadForm, setProjectUploadForm, uploadProject };
}

const uploadProject = async (projectUploadForm: IProjectUploadForm) => {
  projectUploadFormValidationCheck(projectUploadForm); // 업로드 폼 validation 체크
  await fetchEncodedReadme(projectUploadForm.githubLink); // 존재하는 리포지토리인지 확인
  await sendProjectToServer(projectUploadForm); //올바른 리포지토리 링크이면 프로젝트 업로드
};

// 유효성 검사 함수
const projectUploadFormValidationCheck = (projectUploadForm: IProjectUploadForm) => {
  if (projectUploadForm.projectTitle === '') throw new Error('프로젝트 제목을 입력해주세요');
  if (projectUploadForm.projectDescription === '') throw Error('프로젝트 설명을 입력해주세요');
  if (projectUploadForm.githubLink === '') throw Error('깃허브 링크를 입력해주세요');
  if (projectUploadForm.previewImages.length === 0) throw Error('썸네일 이미지를 업로드해주세요');
};

const fetchEncodedReadme = async (githubLink: string) => {
  const [repoOwner, repoName] = githubLink.replace('https://github.com/', '').split('/');

  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/readme`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status !== 200)
    throw new Error(`리드미가 있는 올바른 깃허브 링크인지 확인해주세요!`);
};

const sendProjectToServer = async (project: IProjectUploadForm) => {
  const form = new FormData();

  form.append('projectTitle', project.projectTitle);
  form.append('projectDescription', project.projectDescription);
  form.append('githubLink', project.githubLink);
  form.append('demositeLink', project.demositeLink);
  for (const image of project.previewImages) {
    form.append('previewImages', image);
  }
  for (const hashtag of project.projectHashtag) {
    form.append('projectHashtag', hashtag);
  }

  const response = await fetch(`${BACKEND_API_URL}/projects/`, {
    method: 'POST',
    body: form,
  });

  if (response.status !== 201) throw new Error(`서버 에러 발생 코드: ${response.status}`);

  console.log('업로드 성공');
};
