import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';
import { recruitDetails, recruits } from './dummyData';

const recruitmentUploadHandlers = rest.post(`/recruits`, async (req, res, ctx) => {
  return res(ctx.status(201), ctx.delay(4000), ctx.json(req.body));
});

const recuritmentListHandlers = rest.get(`${BACKEND_API_URL}/recruits`, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(4000), ctx.json(recruits[0]));
});

const recruitmentDetailHandlers = rest.get(`/recruits/:id`, async (req, res, ctx) => {
  let recruitDetail;
  for (const recruit of recruitDetails) {
    if (recruit.id === req.url.pathname.replace('/api/v1/recruits/', '')) recruitDetail = recruit;
  }
  return res(ctx.status(200), ctx.json({ ...recruitDetail }));
});

interface PostAddCommentReqBody {
  content: string;
}

const addCommentHandler = rest.post<PostAddCommentReqBody>(
  `${BACKEND_API_URL}/recruits/:id/comments`,
  async (req, res, ctx) => {
    let comments = [];
    for (const recruit of recruitDetails) {
      if (
        recruit.id === req.url.pathname.replace('/api/v1/recruits/', '').replace('/comments/', '')
      )
        comments = recruit.comments;
    }

    comments.unshift({
      nickName: '물에 빠진 너구리',
      created: '2023-02-23',
      content: req.body.content,
    });
    return res(ctx.status(201), ctx.delay(1000));
  },
);

export const recruitProjectHandlers = [
  recruitmentDetailHandlers,
  recruitmentUploadHandlers,
  recuritmentListHandlers,
  addCommentHandler,
];
