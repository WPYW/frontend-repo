import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitModalButton } from './index';

export default {
  title: 'blocks/RecruitModal/RecruitModalButton',
  component: RecruitModalButton,
} as ComponentMeta<typeof RecruitModalButton>;

const Template: ComponentStory<typeof RecruitModalButton> = (args) => (
  <RecruitModalButton {...args} />
);

export const DefaultModalButton = Template.bind({});
DefaultModalButton.args = {
  children: '버튼',
};
