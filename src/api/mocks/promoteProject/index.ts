import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';
import { projectDetail, projects } from './dummyData';

const projectUploadHandler = rest.post(`${BACKEND_API_URL}/projects/`, async (req, res, ctx) => {
  return res(ctx.status(201), ctx.delay(2000));
});

const projectListHandler = rest.get(`${BACKEND_API_URL}/projects`, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1000), ctx.json(projects[0]));
});

const projectDetailHandler = rest.get(`${BACKEND_API_URL}/projects/:id`, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(2000), ctx.json({ ...projectDetail }));
});

export const promoteProjectHandlers = [
  projectDetailHandler,
  projectUploadHandler,
  projectListHandler,
];
