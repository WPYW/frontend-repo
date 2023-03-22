import React from 'react';
import { action } from '@storybook/addon-actions';
import { RecruitModalCalender } from './index';

export default {
  component: RecruitModalCalender,
  title: 'blocks/RecruitModal/RecruitModalCalender',
};

export const Default = () => (
  <RecruitModalCalender label=" 시작날짜 선택" selectedDate={null} onChange={action('onChange')} />
);
