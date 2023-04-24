import { useState } from 'react';

import { GITHUB_TOKEN } from '@/common/token';
import { BACKEND_API_URL } from '@/common/url';

interface IRecruit {
  recruitTitle: string;
  recruitDescription: string;
  created: string;
  contactInfo: string;
  recruitTech: string[];
  recruitType: string[];
  recruitMember: string;
}

export function useRecruitUpload() {
  const [recruit, setRecruit] = useState<IRecruit>({
    recruitTitle: '',
    recruitDescription: '',
    created: '',
    contactInfo: '',
    recruitTech: [],
    recruitType: [],
    recruitMember: '',
  });

  const setTitle = {
    value: recruit.recruitTitle,
    setValue: (value: string) => setRecruit((prev) => ({ ...prev, recruitTitle: value })),
  };

  const setDescription = {
    descriptionValue: recruit.recruitDescription,
    setDescriptionValue: (value: string) =>
      setRecruit((prev) => ({ ...prev, recruitDescription: value })),
  };

  const setCreated = {
    value: recruit.created,
    setValue: (value: Date | null) => {
      if (value) {
        setRecruit((prev) => ({ ...prev, created: value.toISOString() }));
      } else {
        setRecruit((prev) => ({ ...prev, created: '' }));
      }
    },
  };

  const setContactInfo = {
    value: recruit.contactInfo,
    setValue: (value: string) => setRecruit((prev) => ({ ...prev, contactInfo: value })),
  };

  const setRecruitMember = {
    value: recruit.recruitMember,
    setValue: (value: string) => setRecruit((prev) => ({ ...prev, recruitMember: value })),
  };

  const setHashtags = {
    hashtags: recruit.recruitTech,
    addHashtag: (hashtag: string) =>
      setRecruit((prev) => ({ ...prev, recruitTech: [...prev.recruitTech, hashtag] })),
    removeHashtag: (removedHashtags: string[]) =>
      setRecruit((prev) => ({ ...prev, recruitTech: [...removedHashtags] })),
  };

  const setRecruitType = {
    hashtags: recruit.recruitType,
    addHashtag: (hashtag: string) =>
      setRecruit((prev) => ({ ...prev, recruitType: [...prev.recruitType, hashtag] })),
    removeHashtag: (removedHashtags: string[]) =>
      setRecruit((prev) => ({ ...prev, recruitType: [...removedHashtags] })),
  };

  const uploadRecruit = async () => {
    recruitUploadFormValidationCheck(recruit); // 업로드 폼 validation 체크
    await sendRecruitToServer(recruit); //올바른 리포지토리 링크이면 프로젝트 업로드
  };

  return {
    setTitle,
    setDescription,
    setContactInfo,
    setCreated,
    setHashtags,
    setRecruitMember,
    setRecruitType,
    uploadRecruit,
  };
}

// 유효성 검사 함수
const recruitUploadFormValidationCheck = (recruit: IRecruit) => {
  if (recruit.recruitTitle === '') throw new Error('프로젝트 제목을 입력해주세요');
  if (recruit.recruitDescription === '') throw Error('프로젝트 설명을 입력해주세요');
  if (recruit.contactInfo === '') throw Error('오픈채팅 링크를 입력해주세요');
};

const sendRecruitToServer = async (recruit: IRecruit) => {
  const form = new FormData();

  form.append('title', recruit.recruitTitle);
  form.append('description', recruit.recruitDescription);
  form.append('member', recruit.recruitMember);
  form.append('contact', recruit.contactInfo);
  // form.append('end', recruit.created); //이거 end로 리팩토링
  form.append('deadline', 'D-day 30');
  form.append('shut', 'true');
  // form.append('password', '123');
  // form.append('shut', 'true');
  for (const hashtag of recruit.recruitTech) {
    form.append('skills', hashtag);
  }
  for (const type of recruit.recruitType) {
    form.append('position', type);
  }

  const response = await fetch(`${BACKEND_API_URL}/recruits`, {
    method: 'POST',
    body: form,
  });

  if (response.status !== 201) throw new Error(`모집 프로젝트 업로드에 실패했습니다.`);
};
