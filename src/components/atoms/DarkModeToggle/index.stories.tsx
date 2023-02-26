import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DarkModeToggle } from './index';

export default {
  title: 'atoms/DarkModeToggle',
  component: DarkModeToggle,
} as ComponentMeta<typeof DarkModeToggle>;

const Template: ComponentStory<typeof DarkModeToggle> = (args) => {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  const onClick = () => {
    const currentTheme = window.document.body.classList.contains('light') ? 'light' : 'dark';

    if (currentTheme === 'light') {
      window.document.body.classList.replace('light', 'dark');
      window.localStorage.setItem('theme', 'dark');
      setMode('dark');
    }

    if (currentTheme === 'dark') {
      window.document.body.classList.replace('dark', 'light');
      window.localStorage.setItem('theme', 'light');
      setMode('light');
    }
  };

  return <DarkModeToggle {...args} mode={mode} onClick={onClick} />;
};

export const DefaultDarkModeToggle = Template.bind({});
