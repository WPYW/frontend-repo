import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitDetail } from './index';
import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';

export default {
  title: 'organisms/RecruitDetail',
  component: RecruitDetail,
} as ComponentMeta<typeof RecruitDetail>;

const Template: ComponentStory<typeof RecruitDetail> = () => <RecruitDetail />;

export const DefaultRecruitDetail = Template.bind({});

DefaultRecruitDetail.parameters = {
  msw: {
    handlers: [
      rest.get(`${BACKEND_API_URL}/recruits/:id`, async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ ...details }));
      }),
    ],
  },
};

const details = {
  id: '63cca480-8dcd-4430-86f5-085f8e985af9',
  title: 'young',
  description: 'han',
  types: 'study',
  member: '6',
  recruitTechskill: ['Typescript', 'react'],
  recruitPosition: ['frontend', 'designer', 'backend'],
  startDate: '2022-03-04',
  endDate: '2022-03-06',
  is_remote: false,
  deadline: '2023-04-01',
  dday: 7,
  contact: 'ㅁㄴㄴㅇㅇㅁㄴㄴㅇㅇㄴㄴㅇㅇㅁ',
  shut: false,
  views: 1,
  likes: 0,
  comment: [],
};
