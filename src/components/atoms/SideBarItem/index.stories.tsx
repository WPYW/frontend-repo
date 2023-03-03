import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideBarItem } from './index';

export default {
  title: 'atoms/SideBarItem',
  component: SideBarItem,
} as ComponentMeta<typeof SideBarItem>;

const Template: ComponentStory<typeof SideBarItem> = (args) => <SideBarItem {...args} />;

export const DefaultSideBarItem = Template.bind({});
DefaultSideBarItem.args = {
  children: '네비게이션 버튼',
};

export const ProjectPromoteSideBarItem = Template.bind({});
ProjectPromoteSideBarItem.args = {
  children: '💻 프로젝트 홍보',
};

export const ProjectRecruitSideBarItem = Template.bind({});
ProjectRecruitSideBarItem.args = {
  children: '🧑🏻‍💻 프로젝트 / 스터디 모집',
};
