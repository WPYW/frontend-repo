import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DetailModal } from './index';
import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';

export default {
  title: 'organisms/RecruitDetailModal',
  component: DetailModal,
} as ComponentMeta<typeof DetailModal>;

const Template: ComponentStory<typeof DetailModal> = () => <DetailModal />;

export const DefaultRecruitDetail = Template.bind({});

DefaultRecruitDetail.parameters = {
  msw: {
    handlers: [
      rest.get(`${BACKEND_API_URL}/recruits/:id`, async (req, res, ctx) => {
        let recruitDetail;
        for (const recruit of recruitDetails) {
          if (recruit.id === req.url.pathname.replace('/api/v1/recruits/', ''))
            recruitDetail = recruit;
        }
        return res(ctx.status(200), ctx.json({ ...recruitDetail }));
      }),
    ],
  },
};

const details = {
  id: '63cca480-8dcd-4430-86f5-085f8e985af9',
  title: 'youg',
  description: 'han',
  deadline: 'D-day 30',
  member: 6,
  skills: ['Typescript', 'react'],
  positions: ['frontend', 'designer', 'backend'],
  contactInfo: '카카오톡 오픈챗 링크',

  views: 1,
  likes: 0,

  comments: [],

  shut: false,
  is_remote: false,
};

const recruitDetails = [
  {
    id: 'f2b0e579-a669-4cd8-9d13-5173d66671a7',
    password: '$2y$10$G3ULI99JX27ZtQrLYBSzout7vALMkXyzxRuEiEbIxEYS70tLb6cKe',
    created: '2023-03-02',

    title: '저희와 함께할 팀원들을 모집합니다!',
    description:
      '취준생들 위주로 함께 포트폴리오를 나갈 팀원들을 모집하고 있습니다. 현재 벡엔드 2명이 모집되어 있어 프론트, 백엔드 각각 1명 더 구해요!',
    contactInfo: 'https://open.kakao.com/o/s7V1ekF',
    recruitHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],
    recruitTech: ['react', 'spring', 'aws'],

    views: 11,
    recruitMember: 4,
    shut: false, // false: 프로젝트 마감 전, true: 프로젝트 마감 완료.
    dealine: 'D -Day 30',

    comments: [
      {
        nickName: '불타는 너구리',
        created: '2023-02-14',
        content: '저 참가할래요!',
      },
      {
        nickName: '불타는 너구리',
        created: '2023-02-14',
        content: '저 참가할래요!',
      },
      {
        nickName: '불타는 너구리',
        created: '2023-02-14',
        content: '저 참가할래요!',
      },
    ],
  },
  {
    id: '89d8c87a-56a1-4a80-8c1d-65157f268abe',
    password: '$2y$10$tYs9sQAxL2v55Hq0voBOS.11fuyFgz3wvkEItmsRtv8uv9HH.7t1K',
    created: '2023-03-24',

    title: '함께 프로젝트할 개발자 모집합니다',
    description:
      '저희는 웹 서비스를 제작하고 있는 스타트업입니다. 프론트엔드 1명, 백엔드 1명을 찾고 있습니다.',

    contactInfo: 'https://open.kakao.com/o/s7V1ekF',
    recruitHashtag: ['프론트엔드', '백엔드'],
    recruitTech: ['react', 'django', 'aws'],

    views: 8,
    recruitMember: 2,
    shut: false, // false: 프로젝트 마감 전, true: 프로젝트 마감 완료.
    dealine: 'D -Day 10',

    comments: [
      {
        nickName: '감자튀김',
        created: '2023-03-25',
        content: '안녕하세요! 프론트엔드 개발자로 지원하고 싶습니다.',
      },
      {
        nickName: '초코파이',
        created: '2023-03-25',
        content: '백엔드 개발자로 지원합니다. 연락주세요!',
      },
    ],
  },
  {
    id: '0b8f166d-fa67-44a9-9c07-36d48f0c19b6',
    password: '$2y$10$gyZ.Sv.wjKX9otJGcNNjzOJ06h7xuDr.hG1l2ewuEgTjN7pH23eTm',
    created: '2023-03-22',
    title: '모바일 어플리케이션 개발자 모집합니다',
    description:
      '카카오맵 API를 이용하여 모바일 어플리케이션을 제작하고 있습니다. iOS, Android 각각 1명을 찾고 있습니다.',

    contactInfo: 'https://open.kakao.com/o/s7V1ekF',
    recruitHashtag: ['모바일', 'iOS', 'Android'],
    recruitTech: ['swift', 'kotlin', 'kakao map api'],

    views: 5,
    recruitMember: 2,

    shut: false,
    dealine: 'D -Day 15',

    comments: [
      {
        nickName: 'apple',
        created: '2023-03-23',
        content: '안녕하세요! iOS 개발자로 지원합니다.',
      },
      {
        nickName: 'google',
        created: '2023-03-23',
        content: 'Android 개발자로 지원합니다. 이력서 보내드릴게요!',
      },
    ],
  },
  {
    id: 'f71b70a9-74da-4ddc-a8c7-b7f3dab5d5f5',
    password: '$2y$10$AgsdM7VpyYY2mZ59XYVx6OSBJO6LwW6Uzg6Jy9XMe.E/wlh3qvv6a',
    created: '2023-03-23',
    title: '머신러닝 기반 추천 시스템 개발자 모집합니다',
    description:
      '머신러닝과 딥러닝 알고리즘을 활용한 추천 시스템 개발을 진행하고 있습니다. 파이썬 라이브러리를 이용한 개발 경험이 있으신 분을 찾고 있습니다.',
    contactInfo: 'https://open.kakao.com/o/s7V1ekF',
    recruitHashtag: ['머신러닝', '딥러닝', '파이썬'],
    recruitTech: ['numpy', 'pandas', 'scikit-learn'],

    views: 3,
    recruitMember: 1,

    shut: false,
    dealine: 'D -Day 20',

    comments: [
      {
        nickName: 'AI Lover',
        created: '2023-03-25',
        content: '안녕하세요! 머신러닝 개발 경험이 있습니다. 지원하고 싶습니다!',
      },
    ],
  },
  {
    id: 'a5728f71-1c24-4c27-81d4-8e4dc9fa74b7',
    password: '$2y$10$blpZfbJGgj0iBQ2Q.BMvP.Bk.tmmE6x.zxNHQFeyZj90C6zgUiz.a',
    created: '2023-03-20',
    title: 'AI 모델 개발 및 성능 향상에 관심 있는 개발자 모집',
    description:
      '저희는 인공지능 기술을 이용한 상품 추천 서비스를 제작하고 있습니다. 현재 AI 모델을 개발하고 있으며, 모델의 성능을 향상시킬 수 있는 다양한 방법에 대해 고민하고 있습니다. 함께 성장하고 싶은 개발자분들의 많은 지원 바랍니다. ',
    contactInfo: 'https://open.kakao.com/o/s7V1ekF',
    recruitHashtag: ['AI', '머신러닝', '딥러닝'],
    recruitTech: ['python', 'tensorflow', 'pytorch', 'scikit-learn'],
    views: 12,
    recruitMember: 3,

    shut: false,
    dealine: 'D -Day 20',
    comments: [
      {
        nickName: 'AI매니아',
        created: '2023-03-21',
        content: 'AI 모델 개발자로 지원합니다. 경력 5년차입니다.',
      },
      {
        nickName: '딥러버',
        created: '2023-03-21',
        content: '머신러닝 개발자입니다. 같이 일하고 싶어요!',
      },
      {
        nickName: '파이썬너드',
        created: '2023-03-22',
        content: 'Python 개발자로 지원합니다. 연락주세요!',
      },
    ],
  },
  {
    id: '4a7c4b1b-72b4-4d9f-9a2a-fc970a1d27b8',
    password: '$2y$10$geBtC8DPtITlajjZ/BzvDeLb3Luy3xO1gczwzlJkE0ak2OKFXO9tO',
    created: '2023-03-24',
    title: '책 추천 웹 서비스 개발자 모집합니다',
    description:
      '사용자가 자신이 좋아하는 책을 입력하면, 해당 책과 유사한 책들을 추천해주는 웹 서비스를 개발하려고 합니다. 프론트엔드 2명, 백엔드 1명을 찾고 있습니다.',

    contactInfo: 'https://open.kakao.com/o/s7V1ekF',
    recruitHashtag: ['프론트엔드', '백엔드', '추천 시스템'],
    recruitTech: ['react', 'node.js', 'mongodb'],

    views: 10,
    recruitMember: 3,

    shut: false,
    dealine: 'D -Day 20',

    comments: [
      {
        nickName: 'bookworm',
        created: '2023-03-25',
        content: '프론트엔드 개발자로 지원합니다!',
      },
      {
        nickName: 'database',
        created: '2023-03-25',
        content: '백엔드 개발자로 지원합니다. 이력서 보내드릴게요.',
      },
      {
        nickName: 'recommendation',
        created: '2023-03-25',
        content: '추천 시스템에 대해 관심이 많습니다. 지원 가능한 역할이 있으면 연락주세요!',
      },
    ],
  },
  {
    id: 'a3f99e77-8a34-48d6-bf17-71964a2a34f3',
    password: '$2y$10$foa95RH2Zi1fKXtibLWfl.LJ/P.ywC/xP.n/yOom2WmcxHxv15GJ6',
    created: '2023-03-20',
    title: '프론트엔드 개발자를 모집합니다',
    description:
      '당사는 AI 기술을 활용한 웹 서비스를 개발하고 있습니다. 프론트엔드 1명을 찾고 있습니다.',
    contactInfo: 'https://open.kakao.com/o/s7VdkF',
    recruitHashtag: ['프론트엔드', 'AI', '웹서비스'],
    recruitTech: ['react', 'redux', 'typescript'],

    views: 15,
    recruitMember: 1,

    shut: false,
    dealine: 'D -Day 10',

    comments: [
      {
        nickName: 'coffee_lover',
        created: '2023-03-21',
        content: '안녕하세요! 프론트엔드 개발자로 지원합니다. 이력서와 포트폴리오 보내드릴게요.',
      },
      {
        nickName: 'codingmaster',
        created: '2023-03-21',
        content:
          '저도 프론트엔드 개발자로 지원합니다. 제 경험을 더 자세히 알고싶으시면 연락주세요!',
      },
    ],
  },
];
