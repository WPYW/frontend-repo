import { rest } from 'msw';

export const projectListHandlers = [
  rest.get('/project-list', async (req, res, ctx) => {
    await waitLikeServer(2000);

    const projectListCursor = Number(req.url.searchParams.get('cursor')) || 0;

    return res(
      ctx.status(201),
      ctx.json({
        data: [...projectList.slice(projectListCursor, projectListCursor + 5)],
        nextCursor: projectListCursor + 5,
        isLastPage: projectListCursor >= projectList.length - 5 ? true : false,
      }),
    );
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
];
