import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideBar } from './index';

export default {
  title: 'blocks/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = () => <SideBar />;

export const DefaultSideBar = Template.bind({});
