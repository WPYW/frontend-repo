import { rest } from 'msw';
// import { BACKEND_API_URL } from '@/common/url';

export const recruitmentDetailHandlers = [
  rest.get(`/recruit/:id`, async (req, res, ctx) => {
    // return res(ctx.status(200), ctx.delay(1000), ctx.json({ ...getProjectDetailResponse }));
    return res(ctx.status(200), ctx.json({ ...getRecruitDetailResponse }));
  }),
];

const getRecruitDetailResponse = {
  //Need to add comment section .
  id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
  //   previewImages: [
  //     'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
  //     'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
  //   ],
  comment: [
    {
      id: 'c2265d31-9d52-44e2-afd4-4beb933626f5',
      content: '저 참가할래요!!',
      created: '2023-02-14T09:55:39.503102Z',
      status: 1,
      activate_date: '2023-02-14T09:55:39.502862Z',
      deactivate_date: null,
    },
    {
      id: '6fda5e13-0cde-4772-bb33-3f126ceb48c0',
      content: '기술스택은 저게 끝인가요?',
      created: '2023-02-14T09:55:37.319294Z',
      status: 1,
      activate_date: '2023-02-14T09:55:37.318894Z',
      deactivate_date: null,
    },
    {
      id: '2e7db03b-acf4-4a19-8423-fe1651b773d6',
      content: '주제가 재밌는데 참여 원해요!',
      created: '2023-02-14T09:54:36.939222Z',
      status: 1,
      activate_date: '2023-02-14T09:54:36.938863Z',
      deactivate_date: null,
    },
  ],
  recruitHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],
  recuritTitle: 'PRP(for your portrait right protection)',
  recruitTech: ['react', 'spring', 'aws'],
  recruitDescription:
    '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
  chatLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
  views: 0,
  likes: 0,
  created: '2023-02-14T05:39:39.958595Z',
};
