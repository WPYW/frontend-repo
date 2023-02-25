import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DarkModeToggle from './index';

export default {
  title: 'atoms/DarkModeToggle',
  component: DarkModeToggle,
} as ComponentMeta<typeof DarkModeToggle>;

const Template: ComponentStory<typeof DarkModeToggle> = (args) => <DarkModeToggle {...args} />;

export const DarkModeToggleLight = Template.bind({});
DarkModeToggleLight.args = {
  mode: 'light',
  onClick: () => {
    const currentTheme = window.document.body.classList.contains('light') ? 'light' : 'dark';

    if (currentTheme === 'light') {
      window.document.body.classList.replace('light', 'dark');
      window.localStorage.setItem('theme', 'dark');
    }

    if (currentTheme === 'dark') {
      window.document.body.classList.replace('dark', 'light');
      window.localStorage.setItem('theme', 'light');
    }
  },
};

export const DarkModeToggleDark = Template.bind({});
DarkModeToggleDark.args = {
  mode: 'dark',
  onClick: () => {
    const currentTheme = window.document.body.classList.contains('light') ? 'light' : 'dark';

    if (currentTheme === 'light') {
      window.document.body.classList.replace('light', 'dark');
      window.localStorage.setItem('theme', 'dark');
    }

    if (currentTheme === 'dark') {
      window.document.body.classList.replace('dark', 'light');
      window.localStorage.setItem('theme', 'light');
    }
  },
};
