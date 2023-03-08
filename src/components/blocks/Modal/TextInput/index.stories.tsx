import React from 'react';
import { TextInput } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'blocks/Modal/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const DefaultTextInput = Template.bind({});
DefaultTextInput.args = {
  placeholder: '예시 - 디폴트',
};
