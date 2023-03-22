import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitModal } from './index';

export default {
  title: 'organisms/RecruitModal',
  component: RecruitModal,
} as ComponentMeta<typeof RecruitModal>;

const Template: ComponentStory<typeof RecruitModal> = () => <RecruitModal />;

export const DefaultProjectModal = Template.bind({});
