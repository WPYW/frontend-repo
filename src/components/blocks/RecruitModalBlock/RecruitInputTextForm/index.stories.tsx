import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitInputTextForm } from './index';

export default {
  title: 'Blocks/RecruitModal/RecruitInputTextForm',
  component: RecruitInputTextForm,
} as ComponentMeta<typeof RecruitInputTextForm>;

const Template: ComponentStory<typeof RecruitInputTextForm> = (args) => <RecruitInputTextForm />;

export const Default = Template.bind({});

// Remove the onSubmit prop
Default.args = {};
