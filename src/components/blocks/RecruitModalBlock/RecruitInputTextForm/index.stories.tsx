import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitListSubmit } from './index';

export default {
  title: 'Blocks/RecruitModal/ListSubmit',
  component: RecruitListSubmit,
} as ComponentMeta<typeof RecruitListSubmit>;

const Template: ComponentStory<typeof RecruitListSubmit> = (args) => <RecruitListSubmit />;

export const Default = Template.bind({});

// Remove the onSubmit prop
Default.args = {};
