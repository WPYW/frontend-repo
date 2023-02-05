import { rest } from 'msw';

export const projectUploadHandlers = [
  rest.post('/project', async (req, res, ctx) => {
    await waitLikeServer(2000);

    return res(ctx.status(201), ctx.json(req.body));
  }),
];

function waitLikeServer(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
