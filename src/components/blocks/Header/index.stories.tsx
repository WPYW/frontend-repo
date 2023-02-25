import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './index';

export default {
  title: 'blocks/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const DefaultHeader = Template.bind({});
