import React from 'react';
import { RecruitModalDropDown } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'blocks/RecruitModal/RecruitModalDropDown',
  component: RecruitModalDropDown,
} as ComponentMeta<typeof RecruitModalDropDown>;

const Template: ComponentStory<typeof RecruitModalDropDown> = (args) => (
  <RecruitModalDropDown {...args} />
);

export const DefaultRecruitModalDropDown = Template.bind({});
DefaultRecruitModalDropDown.args = {
  placeholder: '스터디/프로젝트 선택',
  options: ['스터디', '프로젝트'],
  description: '스터디를 선택해주세요',
};
