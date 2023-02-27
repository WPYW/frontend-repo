import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hashtags } from './index';

export default {
  title: 'blocks/Hashtags',
  component: Hashtags,
} as ComponentMeta<typeof Hashtags>;

const Template: ComponentStory<typeof Hashtags> = (args) => <Hashtags {...args} />;

export const DefaultHashtags = Template.bind({});
DefaultHashtags.args = {
  hashtags: ['React', 'TypeScript', '프론트엔드', 'AWS', 'Next'],
};
