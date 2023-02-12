import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';

export const projectListHandlers = [
  rest.get(`${BACKEND_API_URL}/projects`, async (req, res, ctx) => {
    await waitLikeServer(2000);

    // console.log(req.url.searchParams.get('type'));

    // console.log(req.url.searchParams.get('search'));

    // console.log(req.url.searchParams.get('page'));

    const pageNum = Number(req.url.searchParams.get('page')) || 1;

    // if (pageNum === 5) {
    //   return res(
    //     ctx.status(200),
    //     ctx.json({
    //       data: [...projectList.slice(25, 30)],
    //       // nextPage: pageNum + 1,
    //       isLastPage: true,
    //     }),
    //   );
    // }

    return res(
      ctx.status(200),
      ctx.json({
        data: [...projectList.slice((pageNum - 1) * 5, pageNum * 5)],
        // nextPage: pageNum + 1,
        isLastPage: pageNum < 5 ? false : true,
      }),
    );
  }),

  rest.get('/project/detail/:id', async (req, res, ctx) => {
    await waitLikeServer(2000);

    const id = Number(req.url.searchParams.get('id'));

    return res(ctx.status(200), ctx.json({ data: projectList[id] }));
  }),
];

function waitLikeServer(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const projectList = [
  {
    projectTitle: 'WPYW',
    projectDescription:
      '포트폴리오를 편하게 등록할 수 있는 사이트를 찾으시나요? 또는 프로젝트를 같이 진행하려는 팀원을 찾지 못해 고민중이시라면 WPYW가 당신의 고민을 해결해드립니다!',
    projectHashtags: [
      'TagBadge',
      'TagBadge',
      'TagBadge',
      'TagBadge',
      'TagBadge',
      'TagBadge',
      'TagBadge',
    ],
    // projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },

  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },

  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },

  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
  {
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectHashtags: ['React', 'TypeScript'],
    projectImages: ['/temp1.PNG', '/temp2.JPG', '/temp3.JPG'],
  },
];
