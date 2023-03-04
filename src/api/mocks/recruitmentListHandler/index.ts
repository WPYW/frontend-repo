import { rest } from 'msw';
// import { BACKEND_API_URL } from '@/common/url';

export const recuritmentListHandlers = [
  rest.get(`/recruit`, async (req, res, ctx) => {
    const pageNum = Number(req.url.searchParams.get('page')) || 1;

    return res(ctx.status(200), ctx.delay(4000), ctx.json(getRecruitmentListResponse[pageNum - 1]));
  }),
];

const getRecruitmentListResponse = [
  {
    // count: 87, //number of current data
    next: 'http://localhost:8000/api/v1/projects/?page=2', //next page url
    // previous: null, //previous page url
    results: [
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        recruitHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],
        recruitTech: ['react', 'spring', 'aws'],
        recruitTitle: 'PRP(for your portrait right protection)',
        recruitDescription: '프로젝트 같이 할 백엔드 모집합니다.',
        chatLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        recruitHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],
        recruitTech: ['react', 'spring', 'aws'],
        recruitTitle: 'PRP(for your portrait right protection)',
        recruitDescription: '프로젝트 같이 할 백엔드 모집합니다.',
        chatLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        recruitHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],
        recruitTech: ['react', 'spring', 'aws'],
        recruitTitle: 'PRP(for your portrait right protection)',
        recruitDescription: '프로젝트 같이 할 백엔드 모집합니다.',
        chatLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
    ],
  },
];
