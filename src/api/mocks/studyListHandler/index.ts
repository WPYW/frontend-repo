import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';

export const studyListHandlers = [
  rest.get(`${BACKEND_API_URL}/study`, async (req, res, ctx) => {
    const pageNum = Number(req.url.searchParams.get('page')) || 1;

    return res(ctx.status(200), ctx.delay(4000), ctx.json(getStudyListResponse[pageNum - 1]));
  }),
];

const getStudyListResponse = [
  {
    // count: 87, //number of current data
    next: 'http://localhost:8000/api/v1/study/?page=2', //next page url
    // previous: null, //previous page url
    results: [
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        password: '$2y$10$G3ULI99JX27ZtQrLYBSzout7vALMkXyzxRuEiEbIxEYS70tLb6cKe',
        studyHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],
        studyTitle: 'PRP(for your portrait right protection)',
        studyDescription: '프로젝트 같이 할 백엔드 모집합니다.',
        studyMember: 2,
        views: 0,
        created: '2023-02-14T05:39:39.958595Z',
        deadline: 'D-Day 30',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        password: '$2y$10$G3ULI99JX27ZtQrLYBSzout7vALMkXyzxRuEiEbIxEYS70tLb6cKe',
        studyHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],
        studyTitle: 'PRP(for your portrait right protection)',
        studyDescription: '프로젝트 같이 할 백엔드 모집합니다.',
        studyMember: 2,
        views: 0,
        created: '2023-02-14T05:39:39.958595Z',
        deadline: 'D-Day 30',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        password: '$2y$10$G3ULI99JX27ZtQrLYBSzout7vALMkXyzxRuEiEbIxEYS70tLb6cKe',
        studyHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],
        studyTitle: 'PRP(for your portrait right protection)',
        studyDescription: '프로젝트 같이 할 백엔드 모집합니다.',
        studyMember: 2,
        views: 0,
        created: '2023-02-14T05:39:39.958595Z',
        deadline: 'D-Day 30',
      },
    ],
  },
];
