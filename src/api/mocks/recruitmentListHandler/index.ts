import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';

export const recuritmentListHandlers = [
  rest.get(`${BACKEND_API_URL}/recruit`, async (req, res, ctx) => {
    const pageNum = Number(req.url.searchParams.get('page')) || 1;

    return res(ctx.status(200), ctx.delay(4000), ctx.json(getRecruitmentListResponse[pageNum - 1]));
  }),
];

const getRecruitmentListResponse = [
  {
    // count: 87, //number of current data
    next: 'http://localhost:8000/api/v1/recruit/?page=2', //next page url
    // previous: null, //previous page url
    results: [
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        password: '$2y$10$G3ULI99JX27ZtQrLYBSzout7vALMkXyzxRuEiEbIxEYS70tLb6cKe',
        recruitHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],
        recruitTech: ['react', 'spring', 'aws'],
        recruitTitle: 'PRP(for your portrait right protection)',
        recruitDescription: '프로젝트 같이 할 백엔드 모집합니다.',
        recruitMember: '2',
        chatLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        password: '$2y$10$G3ULI99JX27ZtQrLYBSzout7vALMkXyzxRuEiEbIxEYS70tLb6cKe',
        recruitHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],
        recruitTech: ['react', 'spring', 'aws'],
        recruitTitle: 'PRP(for your portrait right protection)',
        recruitDescription: '프로젝트 같이 할 백엔드 모집합니다.',
        recruitMember: '2',
        chatLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        password: '$2y$10$G3ULI99JX27ZtQrLYBSzout7vALMkXyzxRuEiEbIxEYS70tLb6cKe',
        recruitHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],
        recruitTech: ['react', 'spring', 'aws'],
        recruitTitle: 'PRP(for your portrait right protection)',
        recruitDescription: '프로젝트 같이 할 백엔드 모집합니다.',
        recruitMember: '2',
        chatLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
    ],
  },
];
