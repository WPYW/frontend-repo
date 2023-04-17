import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitModalHeader } from './index';

export default {
  title: 'blocks/RecruitModal/RecruitModalHeader',
  component: RecruitModalHeader,
} as ComponentMeta<typeof RecruitModalHeader>;

const Template: ComponentStory<typeof RecruitModalHeader> = (args) => (
  <RecruitModalHeader {...args} />
);

export const DefaultModalHeader = Template.bind({});
DefaultModalHeader.args = {
  title: '모달 타이틀',
  description: '모달 설명',
};
