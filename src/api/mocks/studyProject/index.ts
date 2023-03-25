import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';
import { studyDetails, studys } from './dummyData';

const studyUploadHandlers = rest.post(`/studys`, async (req, res, ctx) => {
  return res(ctx.status(201), ctx.delay(4000), ctx.json(req.body));
});

const studyListHandlers = rest.get(`${BACKEND_API_URL}/studys`, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(4000), ctx.json(studys[0]));
});

const studyDetailHandlers = rest.get(`/studys/:id`, async (req, res, ctx) => {
  let studyDetail;
  for (const study of studyDetails) {
    if (study.id === req.url.pathname.replace('/api/v1/studys/', '')) studyDetail = study;
  }
  return res(ctx.status(200), ctx.json({ ...studyDetail }));
});

interface PostAddCommentReqBody {
  content: string;
}

const addCommentHandler = rest.post<PostAddCommentReqBody>(
  `${BACKEND_API_URL}/studys/:id/comments`,
  async (req, res, ctx) => {
    let comments = [];
    for (const study of studyDetails) {
      if (study.id === req.url.pathname.replace('/api/v1/studys/', '').replace('/comments/', ''))
        comments = study.comments;
    }

    comments.unshift({
      nickName: '물에 빠진 너구리',
      created: '2023-02-23',
      content: req.body.content,
    });
    return res(ctx.status(201), ctx.delay(1000));
  },
);

export const studyProjectHandlers = [
  studyDetailHandlers,
  studyUploadHandlers,
  studyListHandlers,
  addCommentHandler,
];
