import React from 'react';
import { RecruitTextInput } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'blocks/RecruitModal/RecruitTextInput',
  component: RecruitTextInput,
} as ComponentMeta<typeof RecruitTextInput>;

const Template: ComponentStory<typeof RecruitTextInput> = (args) => <RecruitTextInput {...args} />;

export const DefaultTextInput = Template.bind({});
DefaultTextInput.args = {
  placeholder: '예시 - 디폴트ㅁㄴㅇㄹㄴㅁㅇㄹ',
};
