import React from 'react';
import { Story, Meta } from '@storybook/react';
import RecruitPasswordInput from './index';
import { PasswordProps } from './index.types';

export default {
  title: 'blocks/RecruitModal/RecruitPasswordInput',
  component: RecruitPasswordInput,
} as Meta;

const Template: Story<PasswordProps> = (args) => <RecruitPasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Password',
  onChange: (password: string) => console.log('입력이 잘된당.'),
};
