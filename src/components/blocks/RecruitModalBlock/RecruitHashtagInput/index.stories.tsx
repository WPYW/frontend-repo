import React from 'react';
import { RecruitHashtagInput } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'blocks/RecruitModal/RecruitHashtagInput',
  component: RecruitHashtagInput,
} as ComponentMeta<typeof RecruitHashtagInput>;

const Template: ComponentStory<typeof RecruitHashtagInput> = (args) => (
  <RecruitHashtagInput {...args} />
);

export const DefaultRecruitHashtagInput = Template.bind({});
DefaultRecruitHashtagInput.args = {
  placeholder: '태그를 입력해주세요',
};
