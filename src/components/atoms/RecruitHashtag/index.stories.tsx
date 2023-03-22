import React from 'react';
import { RecruitHashtag } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/RecruitHashtag',
  component: RecruitHashtag,
} as ComponentMeta<typeof RecruitHashtag>;

const Template: ComponentStory<typeof RecruitHashtag> = (args) => <RecruitHashtag {...args} />;

export const DefaultHashtag = Template.bind({});
DefaultHashtag.args = {
  children: 'Description',
};
