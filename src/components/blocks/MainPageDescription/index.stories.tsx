import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainPageDescription } from './index';

export default {
  title: 'blocks/MainPageDescription',
  component: MainPageDescription,
} as ComponentMeta<typeof MainPageDescription>;

const Template: ComponentStory<typeof MainPageDescription> = () => <MainPageDescription />;

export const DefaultMainPageDescription = Template.bind({});
