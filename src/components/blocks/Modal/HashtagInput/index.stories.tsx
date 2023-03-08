import React from 'react';
import { HashtagInput } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'blocks/Modal/HashtagInput',
  component: HashtagInput,
} as ComponentMeta<typeof HashtagInput>;

const Template: ComponentStory<typeof HashtagInput> = (args) => <HashtagInput {...args} />;

export const DefaultHashtagInput = Template.bind({});
DefaultHashtagInput.args = {
  placeholder: '태그를 입력해주세요',
};
