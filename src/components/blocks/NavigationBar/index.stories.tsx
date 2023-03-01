import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationBar } from './index';

export default {
  title: 'blocks/NavigationBar',
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => <NavigationBar {...args} />;

export const DefaultNavigationBar = Template.bind({});
DefaultNavigationBar.args = {
  navItemList: ['최신순', '좋아요순', '조회수순'],
};
