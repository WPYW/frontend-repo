import { useState } from 'react';

import { GITHUB_TOKEN } from '@/common/token';
import { BACKEND_API_URL } from '@/common/url';

interface IRecruit {
  recruitTitle: string;
  recruitDescription: string;
  contactInfo: string;
  demositeLink: string;
  recruitHashtag: string[];
  recruitPosition: string[];
}

export function useRecruitUpload() {
  const [recruit, setRecruit] = useState<IRecruit>({
    recruitTitle: '',
    recruitDescription: '',
    contactInfo: '',
    demositeLink: '',
    recruitHashtag: [],
    recruitPosition: [],
  });

  const setTitle = {
    value: recruit.recruitTitle,
    setValue: (value: string) => setRecruit((prev) => ({ ...prev, recruitTitle: value })),
  };

  const setDescription = {
    value: recruit.recruitDescription,
    setValue: (value: string) => setRecruit((prev) => ({ ...prev, recruitDescription: value })),
  };

  const setContactInfo = {
    value: recruit.contactInfo,
    setValue: (value: string) => setRecruit((prev) => ({ ...prev, contactInfo: value })),
  };

  // const setDemositeLink = {
  //   value: recruit.demositeLink,
  //   setValue: (value: string) => setRecruit((prev) => ({ ...prev, demositeLink: value })),
  // };

  const setHashtags = {
    hashtags: recruit.recruitHashtag,
    addHashtag: (hashtag: string) =>
      setRecruit((prev) => ({ ...prev, recruitHashtag: [...prev.recruitHashtag, hashtag] })),
    removeHashtag: (removedHashtags: string[]) =>
      setRecruit((prev) => ({ ...prev, recruitHashtag: [...removedHashtags] })),
  };

  const setPositions = {
    positions: recruit.recruitPosition,
    addPosition: (position: string) =>
      setRecruit((prev) => ({ ...prev, recruitPosition: [...prev.recruitPosition, position] })),
    removePosition: (removedPositions: string[]) =>
      setRecruit((prev) => ({ ...prev, recruitPosition: [...removedPositions] })),
  };

  // const setImages = {
  //   images: recruit.previewImages,
  //   addImage: (images: File[]) =>
  //     setRecruit((prev) => ({
  //       ...prev,
  //       previewImages: [...prev.previewImages, ...images],
  //     })),
  //   removeImage: (removedImages: File[]) =>
  //     setRecruit((prev) => ({
  //       ...prev,
  //       previewImages: [...removedImages],
  //     })),
  // };

  const uploadRecruit = async () => {
    recruitUploadFormValidationCheck(recruit); // 업로드 폼 validation 체크
    await fetchEncodedReadme(recruit.contactInfo); // 존재하는 리포지토리인지 확인
    await sendProjectToServer(recruit); //올바른 리포지토리 링크이면 프로젝트 업로드
  };

  return {
    setTitle,
    setDescription,
    setContactInfo,
    // setDemositeLink,
    setHashtags,
    setPositions,
    uploadRecruit,
  };
}

// 유효성 검사 함수
const recruitUploadFormValidationCheck = (project: IRecruit) => {
  if (project.recruitTitle === '') throw new Error('프로젝트 제목을 입력해주세요');
  if (project.recruitDescription === '') throw Error('프로젝트 설명을 입력해주세요');
  if (project.contactInfo === '') throw Error('깃허브 링크를 입력해주세요');
  // if (project.previewImages.length === 0) throw Error('썸네일 이미지를 업로드해주세요');
};

const fetchEncodedReadme = async (contactInfo: string) => {
  const [repoOwner, repoName] = contactInfo.replace('https://open.kakao.com/', '').split('/');

  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/readme`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status !== 200)
    throw new Error(`리드미가 있는 올바른 깃허브 링크인지 확인해주세요!`);
};

const sendProjectToServer = async (recruit: IRecruit) => {
  const form = new FormData();

  form.append('recruitTitle', recruit.recruitTitle);
  form.append('recruitDescription', recruit.recruitDescription);
  form.append('contactInfo', recruit.contactInfo);
  // form.append('demositeLink', recruit.demositeLink);
  // for (const image of project.previewImages) {
  //   form.append('previewImages', image);
  // }
  for (const hashtag of recruit.recruitHashtag) {
    form.append('recruitHashtag', hashtag);
  }
  for (const position of recruit.recruitPosition) {
    form.append('recruitPosition', position);
  }

  const response = await fetch(`${BACKEND_API_URL}/recruits/`, {
    method: 'POST',
    body: form,
  });

  if (response.status !== 201) throw new Error(`프로젝트 업로드에 실패했습니다.`);
};
