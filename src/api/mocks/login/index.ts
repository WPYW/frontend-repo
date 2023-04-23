import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';

const login = rest.get(`/login`, async (req, res, ctx) => {
    return res(ctx.status(200));
});

export const loginhandler = [login]