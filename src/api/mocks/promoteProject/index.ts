import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';
import { projectDetails, projects } from './dummyData';

const projectUploadHandler = rest.post(`${BACKEND_API_URL}/projects/`, async (req, res, ctx) => {
  return res(ctx.status(201));
});

const projectListHandler = rest.get(`${BACKEND_API_URL}/projects`, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(projects[0]));
});

const projectDetailHandler = rest.get(`${BACKEND_API_URL}/projects/:id`, async (req, res, ctx) => {
  let projectDetail;
  for (const project of projectDetails) {
    if (project.id === req.url.pathname.replace('/api/v1/projects/', '')) projectDetail = project;
  }
  return res(ctx.status(200), ctx.json({ ...projectDetail }));
});

interface PostAddCommentReqBody {
  content: string;
}

const addCommentHandler = rest.post<PostAddCommentReqBody>(
  `${BACKEND_API_URL}/projects/:id/comments`,
  async (req, res, ctx) => {
    let comments = [];
    for (const project of projectDetails) {
      if (
        project.id === req.url.pathname.replace('/api/v1/projects/', '').replace('/comments/', '')
      )
        comments = project.comments;
    }

    comments.unshift({
      nickName: '물에 빠진 너구리',
      created: '2023-02-23',
      content: req.body.content,
    });
    return res(ctx.status(201), ctx.delay(1000));
  },
);

export const promoteProjectHandlers = [
  projectDetailHandler,
  projectUploadHandler,
  projectListHandler,
  addCommentHandler,
];
