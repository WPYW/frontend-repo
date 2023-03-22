import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitSubjectLabel } from './index';

export default {
  title: 'blocks/RecruitModal/RecruitSubjectLabel',
  component: RecruitSubjectLabel,
} as ComponentMeta<typeof RecruitSubjectLabel>;

const Template: ComponentStory<typeof RecruitSubjectLabel> = (args) => (
  <RecruitSubjectLabel {...args} />
);

export const DefaultSubjectLabel = Template.bind({});
DefaultSubjectLabel.args = {
  title: '모달 타이틀',
};
