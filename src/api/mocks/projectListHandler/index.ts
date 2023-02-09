import { rest } from 'msw';

export const projectListHandlers = [
  rest.get('/project-list', async (req, res, ctx) => {
    await waitLikeServer(2000);

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
    id: '1',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '2',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '3',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '4',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '5',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },

  {
    id: '6',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '7',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '8',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '9',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '10',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '1',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '2',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '3',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '4',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '5',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },

  {
    id: '6',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '7',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '8',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '9',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '10',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '1',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '2',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '3',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '4',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '5',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },

  {
    id: '6',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '7',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '8',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '9',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
  {
    id: '10',
    projectTitle: 'SLOW-LETTER',
    projectDescription: '물고기 분류 서비스 입니다.',
    projectLink: 'https://github.com/SLOW-LETTER/docker-repo',
    demoSiteLink: '',
    hashtagArr: ['React', 'TypeScript'],
  },
];
