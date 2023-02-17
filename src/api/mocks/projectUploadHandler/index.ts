import { rest } from 'msw';

export const projectUploadHandlers = [
  rest.post('/project', async (req, res, ctx) => {
    return res(ctx.status(201), ctx.delay(4000), ctx.json(req.body));
  }),
];
