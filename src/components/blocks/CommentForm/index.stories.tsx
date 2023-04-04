import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentForm } from './index';
import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';

export default {
  title: 'blocks/CommentForm',
  component: CommentForm,
} as ComponentMeta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = (args) => <CommentForm {...args} />;

const dummyComments = [
  { nickName: '불타는 너구리', created: '2023-02-12', content: '좋은 프로젝트네요' },
];

export const DefaultCommentForm = Template.bind({});
DefaultCommentForm.args = {
  comments: dummyComments,

  addComment: (comment: FormData) => {
    fetch(`${BACKEND_API_URL}/projects/f2b0e579-a669-4cd8-9d13-5173d66671a7/comments`, {
      method: 'POST',
      body: comment,
    });
  },
};

interface PostAddCommentReqBody {
  content: string;
}

DefaultCommentForm.parameters = {
  msw: {
    handlers: [
      rest.post<PostAddCommentReqBody>(
        `${BACKEND_API_URL}/projects/:id/comments`,
        async (req, res, ctx) => {
          dummyComments.unshift({
            nickName: '물에 빠진 너구리',
            created: '2023-02-23',
            content: req.body.content,
          });
          return res(ctx.status(201), ctx.delay(1000));
        },
      ),
    ],
  },
};
