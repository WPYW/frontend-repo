import React from 'react';
import { Hashtag } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/Hashtag',
  component: Hashtag,
} as ComponentMeta<typeof Hashtag>;

const Template: ComponentStory<typeof Hashtag> = (args) => <Hashtag {...args} />;

export const DefaultHashtag = Template.bind({});
DefaultHashtag.args = {
  children: 'Description',
};
