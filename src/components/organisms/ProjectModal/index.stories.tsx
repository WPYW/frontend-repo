import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProjectModal } from './index';

export default {
  title: 'organisms/ProjectModal',
  component: ProjectModal,
} as ComponentMeta<typeof ProjectModal>;

const Template: ComponentStory<typeof ProjectModal> = () => <ProjectModal />;

export const DefaultProjectModal = Template.bind({});
