import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage from './index';

import { Header } from '@/components/blocks';
import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';

export default {
  title: 'pages/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => (
  <>
    <Header />
    <MainPage />
  </>
);
export const DefaultMainPage = Template.bind({});

DefaultMainPage.parameters = {
  msw: {
    handlers: [
      rest.get(`${BACKEND_API_URL}/projects`, (req, res, ctx) => {
        const pageNum = Number(req.url.searchParams.get('page')) || 1;

        return res(ctx.status(200), ctx.delay(1000), ctx.json(getProjectListResponse[pageNum - 1]));
      }),
    ],
  },
};

const getProjectListResponse = [
  {
    count: 8,
    next: null,
    previous: null,
    results: [
      {
        id: 'f2b0e579-a669-4cd8-9d13-5173d66671a7',
        comment: [],
        previewImages: [
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/f2b0e579-a669-4cd8-9d13-5173d66671a7/%EC%A7%80%EA%B5%AC%EB%A9%8D-1.gif',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/f2b0e579-a669-4cd8-9d13-5173d66671a7/%EC%A7%80%EA%B5%AC%EB%A9%8D-2.gif',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/f2b0e579-a669-4cd8-9d13-5173d66671a7/%EC%A7%80%EA%B5%AC%EB%A9%8D-3.gif',
        ],
        projectHashtag: [
          'flask',
          'gunicorn',
          'nginx',
          'mysql',
          'react',
          'celery',
          'rabbitMQ',
          'pyTorch',
          'docker',
        ],
        projectTitle: '지구멍',
        projectDescription:
          '지구에 사는 멍멍이들, 지구멍! 🐶🐾! 강아지 견종 분류 및 정보 제공 서비스입니다.',
        githubLink: 'https://github.com/2022-Summer-Bootcamp-teamG/puppy-classification',
        demositeLink: null,
        views: 11,
        likes: 4,
        created: '2023-03-02',
      },
      {
        id: '460c355f-4be3-4256-8af1-59753a3f69cd',
        comment: [],
        previewImages: [
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/460c355f-4be3-4256-8af1-59753a3f69cd/Lego2me-1.jpg',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/460c355f-4be3-4256-8af1-59753a3f69cd/Lego2me-2.gif',
        ],
        projectHashtag: [
          'nginx',
          'gunicorn',
          'DRF',
          'tensorflow',
          'mongoDB',
          'nextJS',
          'bigQuery',
          'celery',
          'rabbitMQ',
        ],
        projectTitle: 'Lego2me',
        projectDescription:
          '당신의 사진을 업로해보세요! 당신이 입은 옷으로 성별과 옷을 분석하여 레고 케릭터를 만들기 위해 우리의 AI 기술을 시도해보세요!',
        githubLink: 'https://github.com/sung1san3/Lego2me',
        demositeLink: null,
        views: 0,
        likes: 0,
        created: '2023-03-02',
      },
      {
        id: '780344d5-7610-45e0-8bab-1b2005e574f2',
        comment: [],
        previewImages: [
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/780344d5-7610-45e0-8bab-1b2005e574f2/in_for_plan-1.png',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/780344d5-7610-45e0-8bab-1b2005e574f2/in_for_plan-2.png',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/780344d5-7610-45e0-8bab-1b2005e574f2/in_for_plan-3.png',
        ],
        projectHashtag: [
          'springboot',
          'prometheus',
          'grafana',
          'docker',
          'postgreSQL',
          'nginx',
          'react',
        ],
        projectTitle: 'In-For-Plan',
        projectDescription:
          'Inforplan은 다양한 국가 및 지역에 살고 있는 사람들과 함께 온라인 회의를 진행하는데 있는 시차 문제를 해결하기 위한 온라인 프로젝트 & 회의 일정 관리 웹 사이트 입니다.',
        githubLink: 'https://github.com/team-g-techeer/In-For-Plan',
        demositeLink: null,
        views: 1,
        likes: 0,
        created: '2023-03-02',
      },
      {
        id: 'aa4bdad6-f76e-49d9-ae8f-af25d94037c9',
        comment: [],
        previewImages: [
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/aa4bdad6-f76e-49d9-ae8f-af25d94037c9/FACE_TAG-1.gif',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/aa4bdad6-f76e-49d9-ae8f-af25d94037c9/FACE_TAG-2.gif',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/aa4bdad6-f76e-49d9-ae8f-af25d94037c9/FACE_TAG-3.gif',
        ],
        projectHashtag: [
          'flask',
          'redis',
          'celery',
          'pyTorch',
          'openCV',
          'gunicorn',
          'mysql',
          'nginx',
          'docker',
        ],
        projectTitle: '#FACE_TAG',
        projectDescription:
          '#FACE_TAG는 영상 속 인물들을 태깅하고 인물들의 등장 시간을 리스트로 정리해주는 사이트입니다.',
        githubLink: 'https://github.com/SiliconValleyInternship-KimChOI/FACE_TAG_Docker',
        demositeLink: 'https://youtu.be/bAEyQdHFb_w',
        views: 1,
        likes: 0,
        created: '2023-03-02',
      },
      {
        id: 'e437983b-2d3a-45ab-9ea2-dd971e51e7ca',
        comment: [],
        previewImages: [
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/e437983b-2d3a-45ab-9ea2-dd971e51e7ca/photoon-1.gif',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/e437983b-2d3a-45ab-9ea2-dd971e51e7ca/photoon-2.png',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/e437983b-2d3a-45ab-9ea2-dd971e51e7ca/photoon-3.png',
        ],
        projectHashtag: [
          'mysql',
          'DRF',
          'rabbitMQ',
          'celery',
          'pyTorch',
          'YOLOv5',
          'react',
          'nginx',
        ],
        projectTitle: 'Photoon',
        projectDescription:
          '사진을 만화 그림체로 변경해주는 서비스 만화주인공이 되고싶은 어릴적 꿈 을 이루어드리겠습니다.',
        githubLink: 'https://github.com/2022-SeongNam-Pre-Internship-TeamE/PhoToon',
        demositeLink: null,
        views: 0,
        likes: 0,
        created: '2023-03-02',
      },
      {
        id: '32bab3e1-c722-431f-9d0a-add32a04eeab',
        comment: [],
        previewImages: [
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/32bab3e1-c722-431f-9d0a-add32a04eeab/slowLetter.png',
        ],
        projectHashtag: [
          'springboot',
          'prometheus',
          'grafana',
          'react',
          'zustand',
          'nextJS',
          'nginx',
          'amazonS3',
          'postgreSQL',
          'docker',
        ],
        projectTitle: 'SlowLetter',
        projectDescription:
          '실시간 메신저가 등장하기 전, 밤새 펜팔 답장을 기다려보신 추억을 잊지못하고 계신가요? 그럼 이 서비스를 통해 추억을 다시 되살려보세요! 사용자는 웹에서 보내는 편지를 실제 손편지처럼 주고받게 되는 경험을 통해 예전의 감성을 다시 느낄 수 있습니다.',
        githubLink: 'https://github.com/SLOW-LETTER/docker-repo',
        demositeLink: null,
        views: 1,
        likes: 0,
        created: '2023-03-02',
      },
      {
        id: 'cb60fc75-7b0d-4044-9f67-64bfc06a1cf0',
        comment: [],
        previewImages: [
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/cb60fc75-7b0d-4044-9f67-64bfc06a1cf0/fishyfish-1.gif',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/cb60fc75-7b0d-4044-9f67-64bfc06a1cf0/fishyfish-2.gif',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/cb60fc75-7b0d-4044-9f67-64bfc06a1cf0/fishyfish-3.gif',
        ],
        projectHashtag: [
          'django',
          'postgreSQL',
          'react',
          'nginx',
          'gunicorn',
          'rabbitMQ',
          'celery',
          'docker',
        ],
        projectTitle: 'Fishy Fish',
        projectDescription:
          '낚시를 하고 해가되는 어종인지 아닌지 사진 업로드만으로 쉽게 판독할 수 있는 서비스입니다.',
        githubLink: 'https://github.com/pione3r/FishyFish',
        demositeLink: null,
        views: 0,
        likes: 0,
        created: '2023-03-02',
      },
      {
        id: '3407b932-86fb-4e86-aa4e-252e4bc889fc',
        comment: [],
        previewImages: [
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/3407b932-86fb-4e86-aa4e-252e4bc889fc/prp-1.gif',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/3407b932-86fb-4e86-aa4e-252e4bc889fc/prp-2.gif',
          'https://wpyw-bucket.s3.amazonaws.com/media/project/images/3407b932-86fb-4e86-aa4e-252e4bc889fc/prp-3.gif',
        ],
        projectHashtag: [
          'flask',
          'react',
          'nginx',
          'rabbitMQ',
          'celery',
          'mongoDB',
          'gunicorn',
          'openCV',
        ],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요. 사용자는 업로드 할 영상 속 특정 인물만을 지정하여 모자이크 처리와 캐릭터 변환 처리를 실행할 수 있고 이를 통한 안전한 영상 업로드가 가능할 것 입니다. 서비스 이용방법은 정말 쉽습니다. 사이트에서 회원가입을 한 후, 초상권을 보호하지 않을 인물의 사진을 업로드 합니다. 초상권 보호를 위한 영상을 업로드하고 모자이크과 케릭터 사진 중 어느 것으로 초상권 보호를 할지 선택하면 끝입니다. 당신은 이 서비스에서 당신만의 케릭터를 추가할 수 있고, 당신이 초상권 보호에서 제외할 사람들의 명단과 사진들을 관리할 수 있습니다. 물론, 당신이 수정한 비디오 또한 확인할 수 있습니다. 당신이 이 서비스를 유용하게 이용하면 좋겠습니다. 감사합니다!',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/docker-repo',
        demositeLink: null,
        views: 7,
        likes: 0,
        created: '2023-03-02',
      },
    ],
  },
];
