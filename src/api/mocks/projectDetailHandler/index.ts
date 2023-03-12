import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';

export const projectDetailHandlers = [
  rest.get(`${BACKEND_API_URL}/projects/:id`, async (req, res, ctx) => {
    // return res(ctx.status(200), ctx.delay(1000), ctx.json({ ...getProjectDetailResponse }));
    return res(ctx.status(200), ctx.json({ ...getProjectDetailResponse }));
  }),
];

const getProjectDetailResponse = {
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
};
