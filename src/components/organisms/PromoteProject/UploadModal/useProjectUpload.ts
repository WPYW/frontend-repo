import { useState } from 'react';

import { GITHUB_TOKEN } from '@/common/token';
import { BACKEND_API_URL } from '@/common/url';

interface IProject {
  projectTitle: string;
  projectDescription: string;
  githubLink: string;
  demositeLink: string;
  projectHashtag: string[];
  previewImages: File[];
}

export function useProjectUpload() {
  const [project, setProject] = useState<IProject>({
    projectTitle: '',
    projectDescription: '',
    githubLink: '',
    demositeLink: '',
    projectHashtag: [],
    previewImages: [],
  });

  const setTitle = {
    value: project.projectTitle,
    setValue: (value: string) => setProject((prev) => ({ ...prev, projectTitle: value })),
  };

  const setDescription = {
    value: project.projectDescription,
    setValue: (value: string) => setProject((prev) => ({ ...prev, projectDescription: value })),
  };

  const setGithubLink = {
    value: project.githubLink,
    setValue: (value: string) => setProject((prev) => ({ ...prev, githubLink: value })),
  };

  const setDemositeLink = {
    value: project.demositeLink,
    setValue: (value: string) => setProject((prev) => ({ ...prev, demositeLink: value })),
  };

  const setHashtags = {
    hashtags: project.projectHashtag,
    addHashtag: (hashtag: string) =>
      setProject((prev) => ({ ...prev, projectHashtag: [...prev.projectHashtag, hashtag] })),
    removeHashtag: (removedHashtags: string[]) =>
      setProject((prev) => ({ ...prev, projectHashtag: [...removedHashtags] })),
  };

  const setImages = {
    images: project.previewImages,
    addImage: (images: File[]) =>
      setProject((prev) => ({
        ...prev,
        previewImages: [...prev.previewImages, ...images],
      })),
    removeImage: (removedImages: File[]) =>
      setProject((prev) => ({
        ...prev,
        previewImages: [...removedImages],
      })),
  };

  const uploadProject = async () => {
    projectUploadFormValidationCheck(project); // 업로드 폼 validation 체크
    await fetchEncodedReadme(project.githubLink); // 존재하는 리포지토리인지 확인
    await sendProjectToServer(project); //올바른 리포지토리 링크이면 프로젝트 업로드
  };

  return {
    setTitle,
    setDescription,
    setGithubLink,
    setDemositeLink,
    setHashtags,
    setImages,
    uploadProject,
  };
}

// 유효성 검사 함수
const projectUploadFormValidationCheck = (project: IProject) => {
  if (project.projectTitle === '') throw new Error('프로젝트 제목을 입력해주세요');
  if (project.projectDescription === '') throw Error('프로젝트 설명을 입력해주세요');
  if (project.githubLink === '') throw Error('깃허브 링크를 입력해주세요');
  if (project.previewImages.length === 0) throw Error('썸네일 이미지를 업로드해주세요');
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

const sendProjectToServer = async (project: IProject) => {
  const form = new FormData();

  form.append('title', project.projectTitle);
  form.append('description', project.projectDescription);
  form.append('githubLink', project.githubLink);
  form.append('demositeLink', project.demositeLink);
  for (const image of project.previewImages) {
    form.append('thumbnails', image);
  }
  for (const hashtag of project.projectHashtag) {
    form.append('hashtags', hashtag);
  }

  const response = await fetch(`${BACKEND_API_URL}/projects/`, {
    method: 'POST',
    body: form,
  });

  if (response.status !== 201) throw new Error(`프로젝트 업로드에 실패했습니다.`);
};
