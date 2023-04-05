import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DarkModeToggle } from './index';

export default {
  title: 'atoms/DarkModeToggle',
  component: DarkModeToggle,
} as ComponentMeta<typeof DarkModeToggle>;

const Template: ComponentStory<typeof DarkModeToggle> = () => <DarkModeToggle />;
export const DefaultDarkModeToggle = Template.bind({});
