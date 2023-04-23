import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';


const signup = rest.post(`/signup`, async (req, res, ctx) => {
    return res(ctx.status(201));
});

export const signuphandler = [signup]