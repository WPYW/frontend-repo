import { rest } from 'msw';

// import { BACKEND_API_URL } from '@/common/url';

export const recruitmentUploadHandlers = [
  rest.post(`/recruit`, async (req, res, ctx) => {
    return res(ctx.status(201), ctx.delay(4000), ctx.json(req.body));
  }),
];
