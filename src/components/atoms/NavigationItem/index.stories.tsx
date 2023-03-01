import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationItem } from './index';

export default {
  title: 'atoms/NavigationItem',
  component: NavigationItem,
} as ComponentMeta<typeof NavigationItem>;

const Template: ComponentStory<typeof NavigationItem> = (args) => <NavigationItem {...args} />;

export const DefaultNavigationItem = Template.bind({});
DefaultNavigationItem.args = {
  children: '네비게이션 버튼',
  clicked: false,
};

export const ClickedNavigationItem = Template.bind({});
ClickedNavigationItem.args = {
  children: '네비게이션 버튼',
  clicked: true,
};
